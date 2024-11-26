export interface Reddit {
    name: string;
    url: string;
}

export interface RedditItem {
    id: number;
    id_identification_api: string;
    display_name: string;
    title: string;
    url: string;
    public_description: string;
    created_utc: Date; // Si deseas usar un formato de fecha
    description: string;
    banner_color_id: number;
    icon_img_id: number;
    icon_img: string;
    name: string; // Asegura que la propiedad 'name' esté aquí si es necesaria
  }
  