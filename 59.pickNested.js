function pickNested(data, path) {
    const pathProperties = path.split('.');
    let value = data;

    for (let i = 0; i < pathProperties.length; ++i) {
        const property = pathProperties[i];
        const index = Number(property);

        if (!isNaN(index)) {
            if (Array.isArray(value) && index >= 0 && index < value.length) {
                value = value[index];
            } else {
                return undefined;
            }
        } else {
            if (value && typeof value === 'object' && property in value) {
                value = value[property];
            } else {
                return undefined;
            }
        }
    }

    return value;
}