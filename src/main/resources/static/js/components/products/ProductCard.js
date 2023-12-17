import { div, h2, p } from '/js/lib/dom.js';

export function ProductCard({
    id, productName, brandName, description, measurement, measurementQuantity, stock, price,
}) {
    return div({ className: "text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" })(
        div({ className: "my-3 py-3" })(
             h2({ className: "display-5" })(productName, " ", brandName),
             p({ className: "lead" })(description)
        )
    );/*
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 py-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading.</p>
                </div>
                <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
            </div>
    */
}