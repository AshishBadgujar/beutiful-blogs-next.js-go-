package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Contact struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Msg   string `json:"msg"`
}

var contacts []Contact

func main() {
	// Declare a new router
	r := mux.NewRouter()
	r.HandleFunc("/api/allcontacts", getContacts).Methods("GET")
	r.HandleFunc("/api/contact", submit).Methods("POST")
	fmt.Println("Starting server on the port 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}
func getContacts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(contacts)
}

func submit(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var contact Contact
	_ = json.NewDecoder(r.Body).Decode(&contact)
	contacts = append(contacts, contact)
	json.NewEncoder(w).Encode(contact)
	fmt.Println(contact)
}
