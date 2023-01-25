import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

type CategoryResponse = {
    UUID: string,
    title: string,
    description: string
}

type CategoriesResponse = {
    categories: CategoryResponse[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CategoriesResponse>
) {
    const categories = {
        categories: [
            { UUID: randomUUID(), title: 'Technology', description: 'Description' }
        ]
    }
    res.status(200).json(categories)
}
