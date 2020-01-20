export function genFileURL(fileId, url: string = null) {
    if (!url)
        url = '/api/file/info/imageresponse';    

    const prefix = '/file/download';
    const link = prefix + url + '?fileId=' + fileId;
    return link;
}