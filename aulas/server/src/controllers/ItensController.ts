import {Request,Response} from 'express';
import knex from '../database/connection'


class ItensController {
    async index(request:Request,response:Response){
        const itens = await knex('itens').select('*');
        const serializedItens = itens.map(item =>{
            return {
            id: item.id,
            title : item.title,
            image_url: `http://192.168.3.191:3333/uploads/${item.image}`,
            }
        });
        response.json(serializedItens);
    }
}

export default ItensController;