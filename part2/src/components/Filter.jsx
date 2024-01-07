const Filter = (props) => {
  return (
    <div>
      <p>Set Filters to search by name</p>
      <input
        value={props.filter}
        type="text"
        onInput={props.changeFilter}
        placeholder="filter by name"
      ></input>
    </div>
  );
};

export default Filter;
