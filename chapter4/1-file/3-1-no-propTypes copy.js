export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick() {
    const msg = `type: ${type}, age: ${age ? age : '알수없음'}`;
    console.log(msg, { color: type === 'gold' ? 'red' : 'black' });
  }

  function onClick2() {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
  }
  return null;
}
