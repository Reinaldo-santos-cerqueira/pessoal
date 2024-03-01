export const formatDate = (dates: string) => {
	const date = new Date(dates);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
	const day = String(date.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
	return `${year}-${day}-${month}`;
};
export const formatDateInput = (dates: string) => {
	const date = new Date(dates);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
	const day = String(date.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
	return `${year}-${month}-${day}`;
};
