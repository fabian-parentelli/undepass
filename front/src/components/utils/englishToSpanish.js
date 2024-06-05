function englishToSpanish(word) {

    let spanish;

    switch (word) {
        case 'music':
            spanish = 'Música'
        break;
        
        case 'movie':
            spanish = 'Cine'
        break;
        
        case 'theater':
            spanish = 'Teatro'
        break;
        
        case 'stundup':
            spanish = 'Stund Up'
        break;
        
        case 'dance':
            spanish = 'Danza'
        break;
        
        case 'studio':
            spanish = 'Estudios'
        break;
        
        case 'photography':
            spanish = 'Fotografía'
        break;
        
        case 'art':
            spanish = 'Arte'
        break;

        default:
            spanish = 'Sin categoría';
        break;
    };

    return (spanish);
};

export { englishToSpanish };