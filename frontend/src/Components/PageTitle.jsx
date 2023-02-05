function PageTitle({ pageName }) {
  return (
    <h2
      className="page-title"
      style={{
        marginTop: "1em",
      }}
    >
      {pageName}
    </h2>
  );
}

export default PageTitle;
