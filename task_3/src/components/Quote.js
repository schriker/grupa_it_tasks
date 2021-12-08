function Quote({ data: { quote, author } }) {
  return (
    <div>
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  );
}

export default Quote;