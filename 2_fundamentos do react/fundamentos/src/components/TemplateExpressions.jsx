const TemplateExpressions = () => {
  const name = "João Vitor";
  const age = 27;
  const message = `Hello, my name is ${name} and I am ${age} years old.`;

  return (
    <div>
        <h2>{message}</h2>
    </div>
  );    
};

export default TemplateExpressions;