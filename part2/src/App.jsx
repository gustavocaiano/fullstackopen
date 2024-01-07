import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
