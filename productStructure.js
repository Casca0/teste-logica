const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
	const orderedObject = {};

	products.forEach((product) => {
		const [color, size] = product.split('-');

		orderedObject[color] = orderedObject[color] || {};

		orderedObject[color][size] = (orderedObject[color][size] || 0) + 1;
	});

	return orderedObject;
}
