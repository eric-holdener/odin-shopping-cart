import CategoryCard from "./CategoryCard"

export default function Homepage() {
  const categories = [
    "All",
    "Tech",
    "Games",
    "Clothing",
    "Outdoor"
  ]

  return (
    <div className="categoriesContainer">
      {categories.map((category) => <CategoryCard category={category} key={category}/>)}
    </div>
  )
}