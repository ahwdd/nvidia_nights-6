function CategoryHeader({ text = "3D/CGI" }) {
  return (
    <h2 className="category-header text-[2.624rem] px-2 lg:text-start text-center font-medium">
      {text}
    </h2>
  );
}

export default CategoryHeader;
