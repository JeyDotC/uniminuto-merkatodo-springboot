import { tr, td, img } from '/js/lib/dom.js';

const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' });

export function ProductTableRow({
    id, productName, brandName, description, measurement, measurementQuantity, stock, price,
}){
    return tr()(
        td({ className: 'text-end' })(id),
        td()(
            img({src: ''})()
        ),
        td()(productName),
        td()(brandName),
        td({ className: 'text-end' })(formatter.format(price), ' COP'),
        td()(),
    );
}