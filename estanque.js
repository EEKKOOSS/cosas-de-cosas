var litros_actuales, exceso, menu;
litros_actuales = Number(window.prompt('ingrese la cantidad de litros actuales del estanque '));
menu = Number(window.prompt('seleccione 1 para llenar o 2 para vaciar '));
switch (menu) {
    case 1:
        while (litros_actuales < 10) {
            litros_actuales = litros_actuales + 1;
            window.alert('litros aumentando en ... ' + String(litros_actuales));
        }
        if (litros_actuales > 10) {
            exceso = litros_actuales - 10;
            litros_actuales = litros_actuales - exceso;
            window.alert('tuvo un exceso de : ' + String(exceso));
        }
        window.alert('estanque lleno');

        break;
    case 2:
        while (litros_actuales > 0) {
            litros_actuales = litros_actuales - 1;
            window.alert('vaciando estanque  en ... ' + String(litros_actuales));
        }
        if (litros_actuales < 0) {
            exceso = litros_actuales + 0;
            litros_actuales = litros_actuales - exceso;
            window.alert('tuvo un exceso de : ' + String(exceso));
        }

        alert("estanque vaciado !!!!");

    default:

}