import { producto } from "./producto.model";

export interface cartel {
    id: number;
    nombre: string;
    imagen: string;
    producto?: producto[];

    getId: () => number;
    setId: (id: number) => void;

    getNombre: () => string;
    setNombre: (nombre: string) => void;

    getImagen: () => string;
    setImagen: (imagen: string) => void;

    getProductos?: () => producto[];
    setProductos?: (productos: producto[]) => void;
}