import { cartel } from "./cartel.interface";
import { producto } from "./producto.model";

export class categoria implements cartel{
    
    public id: number;
    public nombre: string;
    public imagen: string;
    public productos?: producto[];

    constructor(
        id: number,
        nombre: string,
        imagen: string,
        productos?: producto[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.productos = productos ?? [];
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

    public getProductos(): producto[] {
        return this.productos ?? [];
    }

    public setProductos(productos: producto[]): void {
        this.productos = productos;
    }
}