class ProductSQA {

clickCheckoutCart() {
    return cy.contains("Checkout").click();
}

}
export default ProductSQA;