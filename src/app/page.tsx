"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import {api} from "@/constants/apis"
import { CardRickMorty } from "@/components/card";

interface IData{
  id: string;
  name: string;
  image: string;
  ki: string;
  affiliation: string;
  gender: string;
  race: string

}

const AxiosPage = () => {
    
    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados")
    const [page, setPage] = useState<string>("1")

    useEffect(() => {
      api.get(`/characters?page=${page}`).then((res) => {
        setErro(false)
        setData(res.data.items)
      }).catch((error) => {
        if(error.response.status == 404){
          setErrorMessage("Pagina não encontrada!!!")
        }
        setErro(true)
      })
    }, [page])
    

    return(
      <>
      <h1>Pagina com useEffect and Axios</h1>
      <input type="text" onChange={(e) => setPage(e.target.value)} value={page} placeholder="Insira a Pagina" />
      {erro && <h5>{errorMessage}</h5>}
      {data.map((item,index) => {
        return(
          
            <div key={item.id} >
                <CardRickMorty imagem={item.image} titulo={item.name} texto1={item.affiliation} status={item.race} gender={item.gender} Species={item.ki} bgCard={`bg-orange-600`} ></CardRickMorty>
                {/* <Image src={item.image} alt={item.name} width={150} height={150} /> */}
            </div>
           
        )
      })}
      </>
  )
}

export default AxiosPage