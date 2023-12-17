import { div, h5, p, img } from '/js/lib/dom.js';

export function ProductCard({
    id, productName, brandName, description, measurement, measurementQuantity, stock, price,
}) {
    return div({ className: "card me-md-3" })(
        img({ src: "", className: "card-img-top", alt: description })(),
        div({ className: "card-body" })(
            h5({ className: "card-title" })(productName, " ", brandName),
            p({ className: "card-text" })(description)
        ),
        div({ className: "card-footer" })(
            div({ className: "text-end" })('$', price, ' COP')
        )
    );
}