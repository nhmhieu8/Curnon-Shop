import mace_1 from '../images/man-colosseum-mace-1.webp';
import mace_2 from '../images/man-colosseum-mace-2.webp';
import mace_3 from '../images/man-colosseum-mace-3.webp';

import mortar_1 from '../images/man-colosseum-mortar-1.webp';
import mortar_2 from '../images/man-colosseum-mortar-2.webp';
import mortar_3 from '../images/man-colosseum-mortar-3.webp';

import calm_1 from '../images/man-kashmir-calm-1.webp';
import calm_2 from '../images/man-kashmir-calm-2.webp';
import calm_3 from '../images/man-kashmir-calm-3.webp';

import potent_1 from '../images/man-kashmir-potent-1.webp';
import potent_2 from '../images/man-kashmir-potent-2.webp';
import potent_3 from '../images/man-kashmir-potent-3.webp';

import heinz_1 from '../images/man-weimar-heinz-1.webp';
import heinz_2 from '../images/man-weimar-heinz-2.webp';
import heinz_3 from '../images/man-weimar-heinz-3.webp';

import jurgen_1 from '../images/man-weimar-jurgen-1.webp';
import jurgen_2 from '../images/man-weimar-jurgen-2.webp';
import jurgen_3 from '../images/man-weimar-jurgen-3.webp';

import lydia_1 from '../images/woman-hamilton-lydia-1.webp';
import lydia_2 from '../images/woman-hamilton-lydia-2.webp';
import lydia_3 from '../images/woman-hamilton-lydia-3.webp';

import sylvia_1 from '../images/woman-hamilton-sylvia-1.webp';
import sylvia_2 from '../images/woman-hamilton-sylvia-2.webp';
import sylvia_3 from '../images/woman-hamilton-sylvia-3.webp';

import monsoon_1 from '../images/woman-melissani-monsoon-1.webp';
import monsoon_2 from '../images/woman-melissani-monsoon-2.webp';
import monsoon_3 from '../images/woman-melissani-monsoon-3.webp';

import sky_1 from '../images/woman-melissani-sky-1.webp';
import sky_2 from '../images/woman-melissani-sky-2.webp';
import sky_3 from '../images/woman-melissani-sky-3.webp';

import grace_1 from '../images/woman-moraine-grace-1.webp';
import grace_2 from '../images/woman-moraine-grace-2.webp';
import grace_3 from '../images/woman-moraine-grace-3.webp';

import lace_1 from '../images/woman-moraine-lace-1.webp';
import lace_2 from '../images/woman-moraine-lace-2.webp';
import lace_3 from '../images/woman-moraine-lace-3.webp';

const products = [
    {
        id: 1,
        name: 'mace',
        style: 'colosseum',
        images: [mace_1, mace_2, mace_3],
        price: 3199000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ nam Colosseum Mace - Dây kim loại Silver với thiết kế tối giản thể hiện sự mạnh mẽ. Chống nước đến 5ATM. 1 đổi 1 trong 3 ngày. Bảo hành 10 năm. Miễn phí vận chuyển.',
    },
    {
        id: 2,
        name: 'mortar',
        style: 'colosseum',
        images: [mortar_1, mortar_2, mortar_3],
        price: 2899000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ nam Curnon Colosseum Mortar - Thiết kế mạnh mẽ cho người trẻ Việt; Dây da, Kích thước mặt lớn 42mm, Chống nước đến 5ATM, Mặt kính Sapphire chống xước vượt trội...',
    },
    {
        id: 3,
        name: 'calm',
        style: 'kashmir',
        images: [calm_1, calm_2, calm_3],
        price: 2399000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ nam Curnon Kashmir Calm mang phong cách trẻ trung, hiện đại, tối giản, phù hợp với nhiều trang phục; Dây kim loại thép, Mặt kính Sapphire chống trầy xước, Chống nước 3ATM',
    },
    {
        id: 4,
        name: 'potent',
        style: 'kashmir',
        images: [potent_1, potent_2, potent_3],
        price: 2299000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ Curnon Kashmir Potent trẻ trung giúp bạn định hướng phong cách thời trang của riêng mình. Chống nước 3ATM. 1 đổi 1 trong 3 ngày. Bảo hành 10 năm. Miễn phí vận chuyển',
    },
    {
        id: 5,
        name: 'heinz',
        style: 'weimar',
        images: [heinz_1, heinz_2, heinz_3],
        price: 2499000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ nam Curnon Weimar Heinz có thiết kế mặt đen nổi bật trên nền kim loại bạc, mang đến nét hiện đại; Dây kim loại, Mặt kính Sapphire chống xước; Chống nước 3ATM...',
    },
    {
        id: 6,
        name: 'jurgen',
        style: 'weimar',
        images: [jurgen_1, jurgen_2, jurgen_3],
        price: 2499000,
        available: true,
        sex: 'nam',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 7,
        name: 'lydia',
        style: 'hamilton',
        images: [lydia_1, lydia_2, lydia_3],
        price: 2599000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 8,
        name: 'sylvia',
        style: 'hamilton',
        images: [sylvia_1, sylvia_2, sylvia_3],
        price: 2299000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 9,
        name: 'monsoon',
        style: 'melissani',
        images: [monsoon_1, monsoon_2, monsoon_3],
        price: 1999000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 10,
        name: 'sky',
        style: 'melissani',
        images: [sky_1, sky_2, sky_3],
        price: 3099000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 11,
        name: 'grace',
        style: 'moraine',
        images: [grace_1, grace_2, grace_3],
        price: 1799000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
    {
        id: 12,
        name: 'lace',
        style: 'moraine',
        images: [lace_1, lace_2, lace_3],
        price: 3199000,
        available: true,
        sex: 'nữ',
        description:
            'Đồng hồ nam Curnon Weimar Jurgen với sắc đen huyền bí, hiện đại trên nền thiết kế Bauhaus cổ điển, tạo sự năng động, mạnh mẽ; Dây kim loại, Mặt kính Sapphire chống xước, Chống nước 3ATM',
    },
];

export default products;
