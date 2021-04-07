package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os/exec"
	"regexp"
	"strings"
)

func readTsFile(filePath string, objectName string) string {
	lsCmd := exec.Command("bash", "-c", fmt.Sprintf("echo \"%s:%s\" |yarn generate_types", filePath, objectName))
	lsOut, err := lsCmd.Output()
	if err != nil {
		panic(err)
	}
	return string(lsOut)
}

func decodeJSON(jsonString string) interface{} {
	regex, _ := regexp.Compile("%RES%(.?)*%RES%")
	raw := regex.FindString(jsonString)
	match := strings.ReplaceAll(raw, "%RES%", "")
	var result interface{}
	json.Unmarshal([]byte(match), &result)
	return result
}

type InputStrcut struct {
	Persian string
	Type_of string
	Value   string
	Require bool
}
type InputSelfStrcut struct {
	Name    string
	Section InputStrcut
}

func createStruct(raw interface{}) []InputSelfStrcut {
	var sections []InputSelfStrcut
	m := raw.(map[string]interface{})
	for sectionName, sectionRawJson := range m {
		m := sectionRawJson.(map[string]interface{})
		var section InputSelfStrcut
		var cc InputStrcut
		for k, v := range m {
			switch k {
			case "type_of":
				cc.Type_of = fmt.Sprint(v)
			case "persian":
				cc.Persian = fmt.Sprint(v)
			case "value":
				cc.Value = fmt.Sprint(v)
			case "require":
				cc.Require = v == true
			}
		}
		section.Section = cc
		section.Name = sectionName
		sections = append(sections, section)
	}
	return sections
}
func getTypeOf(string) string {
	var response string
	switch response {
	case "text":
		response = "string"
	default:
		response = "string"
	}
	return response
}
func createTypeScriptInterfaceFiles(typeName string, recipe []InputSelfStrcut) string {
	log.Print(recipe)
	writerBuffer := strings.Builder{}
	writerBuffer.WriteString(fmt.Sprintf("interface %s {\n", strings.Title(typeName)))
	for _, sectionObject := range recipe {
		writerBuffer.WriteString(fmt.Sprintf("%s: %s\n", sectionObject.Name, getTypeOf(sectionObject.Section.Type_of)))
	}
	writerBuffer.WriteString("}\n")
	response := writerBuffer.String()
	return response
}
func getInterface(filePath string, sectionName string) string {
	encodedData := readTsFile(filePath, sectionName)
	jsonString := decodeJSON(encodedData)
	inputsStructure := createStruct(jsonString)
	response := createTypeScriptInterfaceFiles(sectionName, inputsStructure)
	return response
}
func main() {
	x := getInterface("../src/model/gordon", "patient")
	log.Print(x)
}
