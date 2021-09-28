export interface TaskI {
    //variables a utilizar para los servicios
    id?: any;
    titulo: string;
    descripcion: string;
    img: string;
    telefono: string;
    costo: string;
    fecha?: Date;
    userId: string;
}

export interface TaskII {
    //variables a utilizar para comentarios
    idPropietarioComen?: any;
    apellido: string;
    nombre: string;
    content: string;
    comentariosUsuarios: Array <any>;
    
}



