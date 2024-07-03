import { reactive } from "vue";
import axios from "axios";

export default async function getData(id: string): Promise<any> {
    try {
        const response = await axios.get("/api/getpictures");
        const data = response.data.pictures.filter(
            (image) => image.category === id.toLowerCase() && image.display === true
        );
        return data;
    } catch (error) {
        console.error("Error fetching pictures:", error);
    }
}
