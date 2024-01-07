const PersonForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleChangeName} />
        </div>
        <div>
          phone number:{" "}
          <input value={props.newNumber} onChange={props.handleChangeNumber} />{" "}
        </div>

        <button type="submit">add</button>
      </form>
  );
};

export default PersonForm;
