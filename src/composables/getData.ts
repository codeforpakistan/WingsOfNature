import { reactive } from "vue";
import axios from "axios";

export default async function getData(): Promise<any> {
    try {
        const response = await axios.get("/api/getpictures");
        const data = response.data.pictures;
        return data;
    } catch (error) {
        console.error("Error fetching pictures:", error);
    }
}
