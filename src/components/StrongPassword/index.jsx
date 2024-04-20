export const StrongPassword = (props) => {
  return (
    <p>
      Vaše heslo je: {props.password}, délka: {props.length}
    </p>
  );
};
