import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const personExists = persons.some(
      (person) => person.name === newPerson.name
    );
    if (personExists) {
      alert(`${newPerson.name} is already added to the phonebook.`);
      setNewName("");
      setNewNumber("");
      return;
    }

    if (newName === "" || newNumber === "") {
      alert(`empty parameters`);
      setNewName("");
      setNewNumber("");
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const changeFilter = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.includes(filter)
  );

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} changeFilter={changeFilter} />

      <h3>add a new</h3>

      <PersonForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        newName={newName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
