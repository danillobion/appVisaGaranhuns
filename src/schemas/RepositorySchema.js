export default class RepositorySchema{
    static schema = {
        name: 'Car',
        properties: {
            make:  'string',
            model: 'string',
            miles: {type: 'int', default: 0},
        
        }
    }
}