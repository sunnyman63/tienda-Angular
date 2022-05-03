export class producto {

    public id: number;
    public tipo: string;
    public nombre: string;
    public color: string;
    public precio: number;
    public disponibilidad: boolean;
    public tallas: string[];
    public imagen: string;

    constructor(
        id: number = 0,
        tipo: string = "", 
        nombre: string = "", 
        color: string = "", 
        precio: number = 0, 
        disponibilidad: boolean = false, 
        tallas: string[] = [], 
        imagen: string = ""
    ) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
        this.tallas = tallas;
        this.imagen = imagen;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public isDisponibilidad(): boolean {
        return this.disponibilidad;
    }

    public setDisponibilidad(disponibilidad: boolean): void {
        this.disponibilidad = disponibilidad;
    }

    public getTallas(): string[] {
        return this.tallas;
    }

    public setTallas(tallas: string[]): void {
        this.tallas = tallas;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
}