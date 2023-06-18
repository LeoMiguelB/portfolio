"use client"

import { useState, useEffect } from "react"
import axios from "axios"

type useAxiosProps = {
    url: string,
    method: "head" | "options" | "put" | "post" | "patch" | "delete" | "get",
    body?: any,
    headers?: any,
}

const useAxios = ({ url, method, body = null, headers = null }: useAxiosProps) => {
    const [response, setResponse] = useState<Array<SkillSet> | null>(null);

    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    const fetchData = () => {
        axios[method](url,
            JSON.parse(headers),
            JSON.parse(body)
        ).then((res) => {
            setResponse(res.data);
        })
            .catch((err) => {
                setError(err);
            })
            .finally(() => { });
    };

    return {
        response,
        error
    };

}

export default useAxios;