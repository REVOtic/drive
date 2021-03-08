const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "data",
    description: "A data schema",
    type: "object",
    properties: {
        _id: {
            description: "Field to contain ulid-based instance id",
            type: "string",
        },
        person: {
            description: "A key identifying a particular person",
            type: "string",
        },
        file: {
            type: "string",
            minimum: 1,
        },
        name: {
            type: "string",
            minimum: 1,
        },
        description: {
            type: "string",
            minimum: 1,
        },
        date: {
            type: "date",
            minimum: 1,
        },
        ftype: {
            type: "string",
            minimum: 1
        }
    },
    required: [
        "_id",
        "person",
        "file",
    ],
};

export default schema;