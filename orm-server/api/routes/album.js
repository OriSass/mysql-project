const { Router } = require('express');
const router = Router();
const { Album, Song, Artist } = require('../../models');

router.get('/top_20', async(request, response) => {
    const topAlbums = await Album.findAll({limit: 20});
    response.json(topAlbums);
});
router.get('/:albumId', async(request, response) => {
    const albumId = request.params.albumId;
    const album = await Album.findOne({
        where: { id: albumId },
        include: [{ model: Song }, { model: Artist}]
    });
    response.json(album);
});
module.exports = router;
