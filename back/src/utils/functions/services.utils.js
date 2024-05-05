import { siteRepository } from '../../repositories/index.repositories.js';

const getRandomProductInfo = async (limit, page) => {
    const count = await siteRepository.count();
    const startIdx = (+page - 1) * limit;
    const endIdx = startIdx + limit;
    return { count, startIdx, endIdx };
};

const getPaginatedIndices = (limit, page) => {
    const startIdx = (+page - 1) * limit;
    const endIdx = startIdx + limit;
    return { startIdx, endIdx };
};

const buildResponse = (docs, totalDocs, limit, page) => {
    const totalPages = Math.ceil(totalDocs / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    const nextPage = hasNextPage ? page + 1 : null;
    const prevPage = hasPrevPage ? page - 1 : null;

    return {
        status: 'success',
        products: {
            docs,
            totalDocs,
            limit,
            totalPages,
            page,
            pagingCounter: 1,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            prevLink: hasPrevPage ? prevPage : null,
            nextLink: nextPage ? nextPage : null,
        }
    };
};
export { getRandomProductInfo, getPaginatedIndices, buildResponse };