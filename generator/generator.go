package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"sync"

	_ "github.com/lib/pq"
)

const (
	host     = "127.0.0.1"
	port     = 5432
	user     = "postgres"
	password = "1202212022AaAa"
	dbname   = "postgres"
)

type INPUT_MDN struct {
	Name    string `json:"name"`
	Type_of string `json:"type_of"`
	Value   string `json:"value"`
	Persian string `json:"persian"`
	Require bool   `json:"require"`
}

type INPUT_MDN_JSON struct {
	Name         string      `json:"name"`
	Struct       []INPUT_MDN `json:"inputs"`
	Dependencies []string    `json:"depends"`
	Role         string      `json:"role"`
}

func readJsonFiles() ([]byte, error) {
	data, err := ioutil.ReadFile("../src/model/gordon.json")
	if err != nil {
		fmt.Println("File reading error", err)
		return nil, err
	}
	return (data), nil
}
func decodeJSON(jsonAsBytes []byte) []INPUT_MDN_JSON {
	var result []INPUT_MDN_JSON
	json.Unmarshal(jsonAsBytes, &result)
	return result
}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func createDatabaseTabels(jesonAsObject []INPUT_MDN_JSON) []string {
	var result []string
	for _, data := range jesonAsObject {
		writerBuffer := strings.Builder{}
		writerBuffer.WriteString(fmt.Sprintf("DROP TABLE IF EXISTS %s; \nCREATE TABLE %s (\n", data.Name, data.Name))
		writerBuffer.WriteString("id INT GENERATED ALWAYS AS IDENTITY,\n")
		for _, depency := range data.Dependencies {
			writerBuffer.WriteString(fmt.Sprintf(" %s_id INT NOT NULL ,\n", depency))

		}

		for _, subData := range data.Struct {
			writerBuffer.WriteString(string(subData.Name))
			writerBuffer.WriteString("  TEXT")
			if subData.Require {
				writerBuffer.WriteString(" NOT NULL ")
			}
			writerBuffer.WriteString(",\n")
		}

		writerBuffer.WriteString("reg_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP )\n")
		result = append(result, writerBuffer.String())
	}
	return result
}

func createTabels(arrayOfQueries []string, inputs []INPUT_MDN_JSON, wg *sync.WaitGroup) {
	for id, query := range arrayOfQueries {
		psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
		db, err := sql.Open("postgres", psqlconn)
		CheckError(err)
		defer db.Close()
		insertStmt := query
		_, e := db.Exec(insertStmt)
		CheckError(e)
		fmt.Printf("ID:\t%d\tcreated(%s)\n", id, inputs[id].Name)
		defer wg.Done()
	}
}

func createClasses(inputs []INPUT_MDN_JSON, wq *sync.WaitGroup) {
	for _, inputList := range inputs {
		data, err := ioutil.ReadFile("./templates/class.template")
		if err != nil {
			panic(err)
		}
		stringData := string(data[:])
		lowerCaseName := strings.ToLower(inputList.Name)
		applied_lowerCase := strings.ReplaceAll(stringData, "%LOWER_CASE%", lowerCaseName)
		titleCaseName := strings.Title(inputList.Name)
		applied_TitleCase := strings.ReplaceAll(applied_lowerCase, "%TITLE_CASE%", titleCaseName)
		currentPath, err := os.Getwd()
		CheckError(err)
		err = ioutil.WriteFile(fmt.Sprintf("%s/class/%s.ts", currentPath, lowerCaseName), []byte(applied_TitleCase), 0777)
		CheckError(err)
	}
	defer wq.Done()
}

func createController(inputs []INPUT_MDN_JSON, wq *sync.WaitGroup) {
	for _, inputList := range inputs {
		if inputList.Role == "sub" {

			data, err := ioutil.ReadFile("./templates/controller.template")
			CheckError(err)
			stringData := string(data)
			generatedString := strings.ReplaceAll(stringData, "%LOWER_CASE%", strings.ToLower(inputList.Name))
			currentPath, err := os.Getwd()
			CheckError(err)
			path := ""
			for _, x := range inputList.Dependencies {
				path = path + "/" + x
			}
			os.Mkdir(currentPath+"/controller/"+path, 0775)
			err = ioutil.WriteFile(fmt.Sprintf("%s/controller/%s/%s.ts", currentPath, path, inputList.Name), []byte(generatedString), 0777)
			CheckError(err)
		}
	}

	defer wq.Done()

}

func createDatabaseConnector(inputs []INPUT_MDN_JSON, wg *sync.WaitGroup) {
	postgresData, err := ioutil.ReadFile("./templates/postgres.template")
	CheckError(err)
	postgresString := string(postgresData)
	pen := strings.Builder{}
	pen.WriteString("\n")
	for index, i := range inputs {
		pen.WriteString(i.Name)
		if index != len(inputs) {
			pen.WriteString(",\n")
		}
	}
	result := strings.ReplaceAll(postgresString, "%CONNECTION_LIST%", pen.String())
	currentPath, err := os.Getwd()
	CheckError(err)
	err = ioutil.WriteFile(fmt.Sprintf("%s/database/postgres.ts", currentPath), []byte(result), 0777)
	CheckError(err)
	wg.Done()
}

func main() {
	jsonAsBytes, _ := readJsonFiles()
	jsonAsObject := decodeJSON(jsonAsBytes)
	tablesArray := createDatabaseTabels(jsonAsObject)
	var wg sync.WaitGroup
	wg.Add(4)
	go createTabels(tablesArray, jsonAsObject, &wg)
	go createClasses(jsonAsObject, &wg)
	go createDatabaseConnector(jsonAsObject, &wg)
	go createController(jsonAsObject, &wg)

	wg.Wait()
}
