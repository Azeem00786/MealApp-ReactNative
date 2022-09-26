class Meal {
constructor(
    id,
    categoryIds,
    title,
    affordibility,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegeterian,
    isLactoseFree
){
    this.id=id,
    this.categoryIds=categoryIds,
    this.title=title,
    this.affordibility=affordibility,
    this.complexity=complexity,
    this.imageUrl=imageUrl,
    this.duration=duration,
    this.ingredients=ingredients,
    this.steps=steps,
    this.isGlutenFree=isGlutenFree,
    this.isVegeterian=isVegeterian,
    this.isLactoseFree=isLactoseFree
}
}
export default Meal;