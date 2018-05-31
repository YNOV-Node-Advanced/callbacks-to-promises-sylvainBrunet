function resizeImages(source, dest, width, height) {
    return new Promise(function (resolve, reject) {

        fs.readdir(source, (err, files) => {
            if (err) {
                return reject(err);
            } else {
                files.forEach((filename, fileIndex) => {
                    gm(source + filename)
                        .resize(width, height)
                        .write(
                            dest + "w" + width + "_" + filename,
                            (err, values) => {
                                if (err) {
                                    return reject(err);
                                } else if (fileIndex == files.length - 1) {
                                    resolve();
                                }
                            }
                        );
                });
            }
        });
    })

}