export const checkBudget = (budget, restante) => {
    let clase;

    if ( ( budget / 4 ) > restante ) {
        clase = 'alert alert-danger';
    } else if ( ( budget / 2 ) > restante ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    return clase;
}