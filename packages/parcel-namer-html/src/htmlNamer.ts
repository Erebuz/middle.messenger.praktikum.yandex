const { Namer } = require('@parcel/plugin')
const path = require('path')

module.exports = new Namer({
    name({bundle}) {
        if (bundle.type === 'html') {
            let filePath = bundle.getMainEntry().filePath;

            const dir_path = path.dirname(filePath)
            const dir_name = dir_path.substring(dir_path.lastIndexOf('\\') + 1)

            if (dir_name === 'src') return 'index' + '.' + bundle.type
            else return dir_name + '.' + bundle.type
        }

        return null;
    }
});