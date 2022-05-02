import { cartel } from "./cartel.interface";

export class banner implements cartel{
    
    public id: number;
    public nombre: string;
    public imagen: string;

    constructor(
        id: number,
        nombre: string,
        imagen: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

}