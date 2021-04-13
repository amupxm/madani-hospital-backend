package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"

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
	Name   string      `json:"name"`
	Struct []INPUT_MDN `json:"struct"`

	// Gordon map[string]INPUT_MDN `json:"patient"`
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
		writerBuffer.WriteString(fmt.Sprintf("DROP TABLE IF EXISTS %s; \n CREATE TABLE %s (\n", data.Name, data.Name))
		writerBuffer.WriteString("id INT GENERATED ALWAYS AS IDENTITY,\n")

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

func createTabels(arrayOfQueries []string) {
	for id, query := range arrayOfQueries {
		if id != 0 {
			continue
		}
		psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
		db, err := sql.Open("postgres", psqlconn)
		CheckError(err)
		fmt.Println(query)
		defer db.Close()
		insertStmt := query
		_, e := db.Exec(insertStmt)
		CheckError(e)
	}
}
func main() {
	jsonAsBytes, _ := readJsonFiles()
	jsonAsObject := decodeJSON(jsonAsBytes)
	tablesArray := createDatabaseTabels(jsonAsObject)
	createTabels(tablesArray)
}
