export class Empleado{
    constructor(
        public idEmpleado: number, 
        public apellido: string, 
        public oficio: string,
        public salario: number,
        public departamento: number
    ){}
}