import React, { useEffect, useState } from "react";


DATA = [
    {
        "STT": 1,
        "Type": "Bánh việt",
        "Name": "Bánh bao chay",
        "Unit": "2 cái",
        "Calo": 220.3,
        "Protein": 10.5,
        "Fat": 4.7,
        "Carb": 34
    },
    {
        "STT": 2,
        "Type": "Bánh việt",
        "Name": "Bánh bao nhân cadé",
        "Unit": "1 cái",
        "Calo": 209.3,
        "Protein": 5.2,
        "Fat": 4.1,
        "Carb": 37.9
    },
    {
        "STT": 3,
        "Type": "Bánh việt",
        "Name": "Bánh bao nhân thịt",
        "Unit": "1 cái",
        "Calo": 327.9,
        "Protein": 16.1,
        "Fat": 7.9,
        "Carb": 48.1
    },
    {
        "STT": 4,
        "Type": "Bánh việt",
        "Name": "Bánh bèo (một loại)",
        "Unit": "1 đĩa",
        "Calo": 357.9,
        "Protein": 13.3,
        "Fat": 13.9,
        "Carb": 44.9
    },
    {
        "STT": 5,
        "Type": "Bánh việt",
        "Name": "Bánh bèo thập cẩm",
        "Unit": "1 đĩa",
        "Calo": 608.8,
        "Protein": 15.6,
        "Fat": 21.6,
        "Carb": 88
    },
    {
        "STT": 6,
        "Type": "Bánh việt",
        "Name": "Bánh bía",
        "Unit": "1 cái",
        "Calo": 697.8,
        "Protein": 16.1,
        "Fat": 29.8,
        "Carb": 91.3
    },
    {
        "STT": 7,
        "Type": "Bánh việt",
        "Name": "Bánh bò",
        "Unit": "2 cái",
        "Calo": 100.1,
        "Protein": 1.1,
        "Fat": 4.5,
        "Carb": 13.8
    },
    {
        "STT": 8,
        "Type": "Bánh việt",
        "Name": "Bánh bông lan chén",
        "Unit": "1 cái",
        "Calo": 214.1,
        "Protein": 4.3,
        "Fat": 12.1,
        "Carb": 22
    },
    {
        "STT": 9,
        "Type": "Bánh việt",
        "Name": "Bánh bông lan cuốn",
        "Unit": "1 khoanh",
        "Calo": 152.2,
        "Protein": 4.2,
        "Fat": 2.2,
        "Carb": 28.9
    },
    {
        "STT": 10,
        "Type": "Bánh việt",
        "Name": "Bánh bông lan kem vuông",
        "Unit": "1 cái nhỏ",
        "Calo": 257.4,
        "Protein": 5.2,
        "Fat": 9,
        "Carb": 38.9
    },
    {
        "STT": 11,
        "Type": "Bánh việt",
        "Name": "Bánh bột lọc",
        "Unit": "1 đĩa",
        "Calo": 485.4,
        "Protein": 13.2,
        "Fat": 20.2,
        "Carb": 62.7
    },
    {
        "STT": 12,
        "Type": "Bánh việt",
        "Name": "Bánh cay",
        "Unit": "1 cái nhỏ",
        "Calo": 24.2,
        "Protein": 0.2,
        "Fat": 1,
        "Carb": 3.6
    },
    {
        "STT": 13,
        "Type": "Bánh việt",
        "Name": "Bánh chocopie",
        "Unit": "1 cái",
        "Calo": 121,
        "Protein": 1,
        "Fat": 5,
        "Carb": 18
    },
    {
        "STT": 14,
        "Type": "Bánh việt",
        "Name": "Bánh chưng",
        "Unit": "1 cái",
        "Calo": 407.9,
        "Protein": 14.9,
        "Fat": 5.5,
        "Carb": 74.7
    },
    {
        "STT": 15,
        "Type": "Bánh việt",
        "Name": "Bánh chuối",
        "Unit": "1 miếng",
        "Calo": 505.9,
        "Protein": 4.3,
        "Fat": 13.9,
        "Carb": 90.9
    },
    {
        "STT": 16,
        "Type": "Bánh việt",
        "Name": "Bánh chuối chiên",
        "Unit": "1 cái lớn",
        "Calo": 139.1,
        "Protein": 1,
        "Fat": 9.9,
        "Carb": 11.5
    },
    {
        "STT": 17,
        "Type": "Bánh việt",
        "Name": "Bánh cuốn",
        "Unit": "1 đĩa",
        "Calo": 590.4,
        "Protein": 25.7,
        "Fat": 25.6,
        "Carb": 64.3
    },
    {
        "STT": 18,
        "Type": "Bánh việt",
        "Name": "Bánh da lợn",
        "Unit": "1 miếng",
        "Calo": 363.9,
        "Protein": 3.6,
        "Fat": 11.9,
        "Carb": 60.6
    },
    {
        "STT": 19,
        "Type": "Bánh việt",
        "Name": "Bánh đậu xanh nướng",
        "Unit": "1 miếng",
        "Calo": 404.8,
        "Protein": 13.6,
        "Fat": 11.2,
        "Carb": 62.4
    },
    {
        "STT": 20,
        "Type": "Bánh việt",
        "Name": "Bánh đậu xanh nướng",
        "Unit": "1 cái nhỏ",
        "Calo": 21.08,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carb": 3.12
    },
    {
        "STT": 21,
        "Type": "Bánh việt",
        "Name": "Bánh Flan",
        "Unit": "1 cái tròn",
        "Calo": 66.4,
        "Protein": 1.7,
        "Fat": 1.6,
        "Carb": 11.3
    },
    {
        "STT": 22,
        "Type": "Bánh việt",
        "Name": "Bánh giò",
        "Unit": "1 cái",
        "Calo": 215.1,
        "Protein": 9.3,
        "Fat": 7.1,
        "Carb": 28.5
    },
    {
        "STT": 23,
        "Type": "Bánh việt",
        "Name": "Bánh ít nhân đậu",
        "Unit": "1 cái",
        "Calo": 257.1,
        "Protein": 6.6,
        "Fat": 1.9,
        "Carb": 53.4
    },
    {
        "STT": 24,
        "Type": "Bánh việt",
        "Name": "Bánh ít nhân dừa",
        "Unit": "1 cái",
        "Calo": 261.1,
        "Protein": 3.5,
        "Fat": 5.1,
        "Carb": 50.3
    },
    {
        "STT": 25,
        "Type": "Bánh việt",
        "Name": "Bánh khoai mì nướng",
        "Unit": "1 miếng",
        "Calo": 391.7,
        "Protein": 2.8,
        "Fat": 14.5,
        "Carb": 62.5
    },
    {
        "STT": 26,
        "Type": "Bánh việt",
        "Name": "Bánh khọt",
        "Unit": "1 đĩa 5 cái",
        "Calo": 154.12,
        "Protein": 5.8,
        "Fat": 7.08,
        "Carb": 16.8
    },
    {
        "STT": 27,
        "Type": "Bánh việt",
        "Name": "Bánh lá chả tôm",
        "Unit": "1 đĩa",
        "Calo": 331.6,
        "Protein": 17.1,
        "Fat": 5.2,
        "Carb": 54.1
    },
    {
        "STT": 28,
        "Type": "Bánh việt",
        "Name": "Bánh lá dứa nhân chuối",
        "Unit": "1 cái",
        "Calo": 154.1,
        "Protein": 4.8,
        "Fat": 3.7,
        "Carb": 25.4
    },
    {
        "STT": 29,
        "Type": "Bánh việt",
        "Name": "Bánh lá dừa nhân đậu",
        "Unit": "1 cái",
        "Calo": 156.2,
        "Protein": 5.4,
        "Fat": 4.6,
        "Carb": 23.3
    },
    {
        "STT": 30,
        "Type": "Bánh việt",
        "Name": "Bánh mè",
        "Unit": "1 cái nhỏ",
        "Calo": 170.1,
        "Protein": 3.1,
        "Fat": 11.7,
        "Carb": 13.1
    },
    {
        "STT": 31,
        "Type": "Bánh việt",
        "Name": "Bánh men",
        "Unit": "1 cái nhỏ",
        "Calo": 3.2,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 0.7
    },
    {
        "STT": 32,
        "Type": "Bánh việt",
        "Name": "Bánh mì cadé Kinh đô",
        "Unit": "1 cái",
        "Calo": 111.6,
        "Protein": 3,
        "Fat": 2,
        "Carb": 20.4
    },
    {
        "STT": 33,
        "Type": "Bánh việt",
        "Name": "Bánh mì kẹp cá hộp",
        "Unit": "1 ổ",
        "Calo": 398.9,
        "Protein": 15.1,
        "Fat": 13.7,
        "Carb": 53.8
    },
    {
        "STT": 34,
        "Type": "Bánh việt",
        "Name": "Bánh mì kẹp chà bông",
        "Unit": "1 ổ",
        "Calo": 331.6,
        "Protein": 18.4,
        "Fat": 4.8,
        "Carb": 53.7
    },
    {
        "STT": 35,
        "Type": "Bánh việt",
        "Name": "Bánh mì kẹp chả lụa",
        "Unit": "1 ổ",
        "Calo": 430.6,
        "Protein": 20.1,
        "Fat": 14.2,
        "Carb": 55.6
    },
    {
        "STT": 36,
        "Type": "Bánh việt",
        "Name": "Bánh mì ngọt Đức phát",
        "Unit": "1 ổ",
        "Calo": 303.3,
        "Protein": 9.5,
        "Fat": 4.9,
        "Carb": 55.3
    },
    {
        "STT": 37,
        "Type": "Bánh việt",
        "Name": "Bánh mì ổ",
        "Unit": "1 ổ trung bình",
        "Calo": 239.6,
        "Protein": 7.6,
        "Fat": 0.8,
        "Carb": 50.5
    },
    {
        "STT": 38,
        "Type": "Bánh việt",
        "Name": "Bánh mì sandwich",
        "Unit": "1 lát vuông",
        "Calo": 88.4,
        "Protein": 2.6,
        "Fat": 1.2,
        "Carb": 16.8
    },
    {
        "STT": 39,
        "Type": "Bánh việt",
        "Name": "Bánh mì sandwich kẹp thịt",
        "Unit": "1 cái",
        "Calo": 467,
        "Protein": 18.9,
        "Fat": 26.2,
        "Carb": 38.9
    },
    {
        "STT": 40,
        "Type": "Bánh việt",
        "Name": "Bánh mì thịt",
        "Unit": "1 ổ",
        "Calo": 460.7,
        "Protein": 17.8,
        "Fat": 18.7,
        "Carb": 55.3
    },
    {
        "STT": 41,
        "Type": "Bánh việt",
        "Name": "Bánh patechaud",
        "Unit": "1 cái",
        "Calo": 373,
        "Protein": 10.5,
        "Fat": 20.2,
        "Carb": 37.3
    },
    {
        "STT": 42,
        "Type": "Bánh việt",
        "Name": "Bánh phồng tôm",
        "Unit": "1 đĩa 5 cái",
        "Calo": 168.8,
        "Protein": 0.4,
        "Fat": 14.8,
        "Carb": 8.5
    },
    {
        "STT": 43,
        "Type": "Bánh việt",
        "Name": "Bánh quy bơ (biscuit)",
        "Unit": "1 cái vuông nhỏ",
        "Calo": 38.1,
        "Protein": 0.9,
        "Fat": 0.5,
        "Carb": 7.5
    },
    {
        "STT": 44,
        "Type": "Bánh việt",
        "Name": "Bánh snack",
        "Unit": "1 gói",
        "Calo": 122.9,
        "Protein": 4,
        "Fat": 3.7,
        "Carb": 18.4
    },
    {
        "STT": 45,
        "Type": "Bánh việt",
        "Name": "Bánh su kem",
        "Unit": "1 cái",
        "Calo": 112.4,
        "Protein": 2.4,
        "Fat": 7.2,
        "Carb": 9.5
    },
    {
        "STT": 46,
        "Type": "Bánh việt",
        "Name": "Bánh sừng trâu",
        "Unit": "1 cái",
        "Calo": 226.9,
        "Protein": 4.6,
        "Fat": 7.3,
        "Carb": 35.7
    },
    {
        "STT": 47,
        "Type": "Bánh việt",
        "Name": "Bánh tét nhân chuối",
        "Unit": "1 cái",
        "Calo": 304.4,
        "Protein": 6.2,
        "Fat": 1.2,
        "Carb": 67.2
    },
    {
        "STT": 48,
        "Type": "Bánh việt",
        "Name": "Bánh tét nhân đậu ngọt",
        "Unit": "1 cái",
        "Calo": 445.4,
        "Protein": 13.7,
        "Fat": 1.8,
        "Carb": 93.6
    },
    {
        "STT": 49,
        "Type": "Bánh việt",
        "Name": "Bánh tét nhân mặn",
        "Unit": "1 cái",
        "Calo": 407.9,
        "Protein": 14.9,
        "Fat": 5.5,
        "Carb": 74.7
    },
    {
        "STT": 50,
        "Type": "Bánh việt",
        "Name": "Bánh tiêu",
        "Unit": "1 cái lớn",
        "Calo": 131.8,
        "Protein": 1.9,
        "Fat": 7.8,
        "Carb": 13.5
    },
    {
        "STT": 51,
        "Type": "Bánh việt",
        "Name": "Bánh ướt",
        "Unit": "1 đĩa",
        "Calo": 748.9,
        "Protein": 22.9,
        "Fat": 19.3,
        "Carb": 120.9
    },
    {
        "STT": 52,
        "Type": "Bánh việt",
        "Name": "Bánh xèo",
        "Unit": "1 cái",
        "Calo": 517.3,
        "Protein": 15,
        "Fat": 19.3,
        "Carb": 70.9
    },
    {
        "STT": 53,
        "Type": "Canh",
        "Name": "Canh bắp cải",
        "Unit": "1 chén",
        "Calo": 37.3,
        "Protein": 1.8,
        "Fat": 2.1,
        "Carb": 2.8
    },
    {
        "STT": 54,
        "Type": "Canh",
        "Name": "Canh bầu",
        "Unit": "1 chén",
        "Calo": 29.7,
        "Protein": 1.2,
        "Fat": 2.1,
        "Carb": 1.5
    },
    {
        "STT": 55,
        "Type": "Canh",
        "Name": "Canh bí đao",
        "Unit": "1 chén",
        "Calo": 28.9,
        "Protein": 1.2,
        "Fat": 2.1,
        "Carb": 1.3
    },
    {
        "STT": 56,
        "Type": "Canh",
        "Name": "Canh bí rợ",
        "Unit": "1 chén",
        "Calo": 42.1,
        "Protein": 1.2,
        "Fat": 2.1,
        "Carb": 4.6
    },
    {
        "STT": 57,
        "Type": "Canh",
        "Name": "Canh cải ngọt",
        "Unit": "1 chén",
        "Calo": 30.1,
        "Protein": 1.7,
        "Fat": 2.1,
        "Carb": 1.1
    },
    {
        "STT": 58,
        "Type": "Canh",
        "Name": "Canh chua",
        "Unit": "1 chén",
        "Calo": 29.1,
        "Protein": 1.9,
        "Fat": 1.1,
        "Carb": 2.9
    },
    {
        "STT": 59,
        "Type": "Canh",
        "Name": "Canh chua",
        "Unit": "1 tô",
        "Calo": 36.6,
        "Protein": 1.7,
        "Fat": 1,
        "Carb": 5.2
    },
    {
        "STT": 60,
        "Type": "Canh",
        "Name": "Canh hẹ",
        "Unit": "1 chén",
        "Calo": 33.3,
        "Protein": 2.9,
        "Fat": 2.1,
        "Carb": 0.7
    },
    {
        "STT": 61,
        "Type": "Canh",
        "Name": "Canh khổ qua hầm",
        "Unit": "1 tô",
        "Calo": 174.2,
        "Protein": 10,
        "Fat": 11.4,
        "Carb": 7.9
    },
    {
        "STT": 62,
        "Type": "Canh",
        "Name": "Canh khổ qua hầm",
        "Unit": "1 chén",
        "Calo": 87.2,
        "Protein": 4.5,
        "Fat": 4,
        "Carb": 8.3
    },
    {
        "STT": 63,
        "Type": "Canh",
        "Name": "Canh khoai mỡ",
        "Unit": "1 chén",
        "Calo": 50.7,
        "Protein": 1.5,
        "Fat": 1.1,
        "Carb": 8.7
    },
    {
        "STT": 64,
        "Type": "Canh",
        "Name": "Canh kiểm",
        "Unit": "1 tô",
        "Calo": 290.3,
        "Protein": 5.4,
        "Fat": 13.1,
        "Carb": 37.7
    },
    {
        "STT": 65,
        "Type": "Canh",
        "Name": "Canh mướp",
        "Unit": "1 chén",
        "Calo": 30.9,
        "Protein": 1.4,
        "Fat": 2.1,
        "Carb": 1.6
    },
    {
        "STT": 66,
        "Type": "Canh",
        "Name": "Canh rau dền",
        "Unit": "1 chén",
        "Calo": 22.9,
        "Protein": 0.9,
        "Fat": 2.1,
        "Carb": 0.1
    },
    {
        "STT": 67,
        "Type": "Canh",
        "Name": "Canh rau ngót",
        "Unit": "1 chén",
        "Calo": 29.3,
        "Protein": 1.9,
        "Fat": 2.1,
        "Carb": 0.7
    },
    {
        "STT": 68,
        "Type": "Canh",
        "Name": "Canh rau ngót",
        "Unit": "1 tô",
        "Calo": 23.4,
        "Protein": 1.6,
        "Fat": 1.4,
        "Carb": 1.1
    },
    {
        "STT": 69,
        "Type": "Cháo",
        "Name": "Cháo đậu đỏ",
        "Unit": "1 tô",
        "Calo": 323.4,
        "Protein": 10.6,
        "Fat": 11.8,
        "Carb": 43.7
    },
    {
        "STT": 70,
        "Type": "Cháo",
        "Name": "Cháo gỏi vịt",
        "Unit": "1 tô",
        "Calo": 931.9,
        "Protein": 50.2,
        "Fat": 60.3,
        "Carb": 47.1
    },
    {
        "STT": 71,
        "Type": "Cháo",
        "Name": "Cháo huyết",
        "Unit": "1 tô",
        "Calo": 331.7,
        "Protein": 22.1,
        "Fat": 8.9,
        "Carb": 40.8
    },
    {
        "STT": 72,
        "Type": "Cháo",
        "Name": "Cháo lòng",
        "Unit": "1 tô",
        "Calo": 411.5,
        "Protein": 30.8,
        "Fat": 13.5,
        "Carb": 41.7
    },
    {
        "STT": 73,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Bún ăn liền",
        "Unit": "100g",
        "Calo": 346.6,
        "Protein": 6.4,
        "Fat": 9,
        "Carb": 60
    },
    {
        "STT": 74,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Cháo ăn liền",
        "Unit": "100g",
        "Calo": 346.8,
        "Protein": 6.8,
        "Fat": 4.4,
        "Carb": 70
    },
    {
        "STT": 75,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Mì ăn liền",
        "Unit": "100g",
        "Calo": 434.7,
        "Protein": 9.7,
        "Fat": 19.5,
        "Carb": 55.1
    },
    {
        "STT": 76,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Miến ăn liền",
        "Unit": "100g",
        "Calo": 367.2,
        "Protein": 3.8,
        "Fat": 9.6,
        "Carb": 66.4
    },
    {
        "STT": 77,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Phở ăn liền",
        "Unit": "100g",
        "Calo": 342.2,
        "Protein": 6.8,
        "Fat": 4.2,
        "Carb": 69.3
    },
    {
        "STT": 78,
        "Type": "Chè",
        "Name": "Bắp giã",
        "Unit": "1 gói",
        "Calo": 328.6,
        "Protein": 6.3,
        "Fat": 11,
        "Carb": 51.1
    },
    {
        "STT": 79,
        "Type": "Chè",
        "Name": "Chè bắp",
        "Unit": "1 chén",
        "Calo": 351.7,
        "Protein": 4.7,
        "Fat": 10.1,
        "Carb": 60.5
    },
    {
        "STT": 80,
        "Type": "Chè",
        "Name": "Chè chuối chưng",
        "Unit": "1 chén",
        "Calo": 333.1,
        "Protein": 3.5,
        "Fat": 10.7,
        "Carb": 55.7
    },
    {
        "STT": 81,
        "Type": "Chè",
        "Name": "Chè đậu đen",
        "Unit": "1 ly",
        "Calo": 419.4,
        "Protein": 13,
        "Fat": 9.8,
        "Carb": 69.8
    },
    {
        "STT": 82,
        "Type": "Chè",
        "Name": "Chè đậu trắng",
        "Unit": "1 ly",
        "Calo": 412.3,
        "Protein": 12,
        "Fat": 9.9,
        "Carb": 68.8
    },
    {
        "STT": 83,
        "Type": "Chè",
        "Name": "Chè đậu xanh đánh",
        "Unit": "1 chén",
        "Calo": 358.2,
        "Protein": 13.2,
        "Fat": 10.2,
        "Carb": 53.4
    },
    {
        "STT": 84,
        "Type": "Chè",
        "Name": "Chè đậu xanh phổ tai",
        "Unit": "1 ly",
        "Calo": 422.9,
        "Protein": 12.9,
        "Fat": 10.1,
        "Carb": 70.1
    },
    {
        "STT": 85,
        "Type": "Chè",
        "Name": "Chè nếp đậu trắng",
        "Unit": "1 chén",
        "Calo": 435.6,
        "Protein": 11.5,
        "Fat": 10,
        "Carb": 74.9
    },
    {
        "STT": 86,
        "Type": "Chè",
        "Name": "Chè nếp khoai môn",
        "Unit": "1 chén",
        "Calo": 385,
        "Protein": 4.7,
        "Fat": 11,
        "Carb": 66.8
    },
    {
        "STT": 87,
        "Type": "Chè",
        "Name": "Chè táo xọn",
        "Unit": "1 chén",
        "Calo": 310.4,
        "Protein": 7.4,
        "Fat": 9.6,
        "Carb": 48.6
    },
    {
        "STT": 88,
        "Type": "Chè",
        "Name": "Chè thạch nhãn",
        "Unit": "1 ly",
        "Calo": 198.5,
        "Protein": 2.2,
        "Fat": 0.1,
        "Carb": 47.2
    },
    {
        "STT": 89,
        "Type": "Chè",
        "Name": "Chè thưng",
        "Unit": "1 chén",
        "Calo": 329.1,
        "Protein": 7.1,
        "Fat": 11.9,
        "Carb": 48.4
    },
    {
        "STT": 90,
        "Type": "Chè",
        "Name": "Chè trôi nước",
        "Unit": "1 chén",
        "Calo": 513.2,
        "Protein": 11.7,
        "Fat": 12,
        "Carb": 89.6
    },
    {
        "STT": 91,
        "Type": "Chè",
        "Name": "Sâm bổ lượng",
        "Unit": "1 ly",
        "Calo": 268.1,
        "Protein": 6.4,
        "Fat": 0.5,
        "Carb": 59.5
    },
    {
        "STT": 92,
        "Type": "Cơm phần",
        "Name": "Cơm chiên dương châu",
        "Unit": "1 đĩa",
        "Calo": 532.1,
        "Protein": 14.9,
        "Fat": 11.3,
        "Carb": 92.7
    },
    {
        "STT": 93,
        "Type": "Cơm phần",
        "Name": "Cơm tấm bì",
        "Unit": "1 đĩa cơm phần",
        "Calo": 628.1,
        "Protein": 26,
        "Fat": 19.3,
        "Carb": 87.6
    },
    {
        "STT": 94,
        "Type": "Cơm phần",
        "Name": "Cơm tấm chả",
        "Unit": "1 đĩa cơm phần",
        "Calo": 593.7,
        "Protein": 17,
        "Fat": 18.1,
        "Carb": 90.7
    },
    {
        "STT": 95,
        "Type": "Cơm phần",
        "Name": "Cơm tấm sườn",
        "Unit": "1 đĩa cơm phần",
        "Calo": 528.9,
        "Protein": 20.7,
        "Fat": 13.3,
        "Carb": 81.6
    },
    {
        "STT": 96,
        "Type": "Củ giàu tinh bột",
        "Name": "Bột sắn dây",
        "Unit": "100g",
        "Calo": 340,
        "Protein": 0.7,
        "Fat": 0,
        "Carb": 84.3
    },
    {
        "STT": 97,
        "Type": "Củ giàu tinh bột",
        "Name": "Củ dong",
        "Unit": "100g",
        "Calo": 119.2,
        "Protein": 1.4,
        "Fat": 0,
        "Carb": 28.4
    },
    {
        "STT": 98,
        "Type": "Củ giàu tinh bột",
        "Name": "Củ sắn",
        "Unit": "100g",
        "Calo": 151.8,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carb": 36.4
    },
    {
        "STT": 99,
        "Type": "Củ giàu tinh bột",
        "Name": "Củ từ",
        "Unit": "100g",
        "Calo": 92,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 21.5
    },
    {
        "STT": 100,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai lang",
        "Unit": "100g",
        "Calo": 119,
        "Protein": 0.8,
        "Fat": 0.2,
        "Carb": 28.5
    },
    {
        "STT": 101,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai lang nghệ",
        "Unit": "100g",
        "Calo": 115.9,
        "Protein": 1.2,
        "Fat": 0.3,
        "Carb": 27.1
    },
    {
        "STT": 102,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai môn",
        "Unit": "100g",
        "Calo": 108.6,
        "Protein": 1.5,
        "Fat": 0.2,
        "Carb": 25.2
    },
    {
        "STT": 103,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai tây",
        "Unit": "100g",
        "Calo": 92,
        "Protein": 2,
        "Fat": 0,
        "Carb": 21
    },
    {
        "STT": 104,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai tây chiên",
        "Unit": "100g",
        "Calo": 524.6,
        "Protein": 2.2,
        "Fat": 35.4,
        "Carb": 49.3
    },
    {
        "STT": 105,
        "Type": "Củ giàu tinh bột",
        "Name": "Miến dong",
        "Unit": "100g",
        "Calo": 332.1,
        "Protein": 0.6,
        "Fat": 0.1,
        "Carb": 82.2
    },
    {
        "STT": 106,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Bơ",
        "Unit": "100g",
        "Calo": 755.5,
        "Protein": 0.5,
        "Fat": 83.5,
        "Carb": 0.5
    },
    {
        "STT": 107,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu thực vật",
        "Unit": "100g",
        "Calo": 897.3,
        "Protein": 0,
        "Fat": 99.7,
        "Carb": 0
    },
    {
        "STT": 108,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Mỡ lợn nước",
        "Unit": "100g",
        "Calo": 896.4,
        "Protein": 0,
        "Fat": 99.6,
        "Carb": 0
    },
    {
        "STT": 109,
        "Type": "Đồ ăn tiện lợi",
        "Name": "Onigiri Tamago",
        "Unit": "1 cái",
        "Calo": 243.1,
        "Protein": 7.6,
        "Fat": 7.9,
        "Carb": 35.4
    },
    {
        "STT": 110,
        "Type": "Đồ ăn tiện lợi",
        "Name": "Onigiri Tsukune",
        "Unit": "1 cái",
        "Calo": 243.1,
        "Protein": 7.6,
        "Fat": 7.9,
        "Carb": 35.4
    },
    {
        "STT": 111,
        "Type": "Đồ ăn vặt",
        "Name": "Bắp umai",
        "Unit": "1 cái",
        "Calo": 43.5,
        "Protein": 0.5,
        "Fat": 2.7,
        "Carb": 4.3
    },
    {
        "STT": 112,
        "Type": "Đồ hộp",
        "Name": "Cá thu hộp",
        "Unit": "100g",
        "Calo": 207.2,
        "Protein": 24.8,
        "Fat": 12,
        "Carb": 0
    },
    {
        "STT": 113,
        "Type": "Đồ hộp",
        "Name": "Cá trích hộp",
        "Unit": "100g",
        "Calo": 232.8,
        "Protein": 22.3,
        "Fat": 14.4,
        "Carb": 3.5
    },
    {
        "STT": 114,
        "Type": "Đồ hộp",
        "Name": "Đậu phộng chiên",
        "Unit": "100g",
        "Calo": 679.5,
        "Protein": 25.7,
        "Fat": 59.5,
        "Carb": 10.3
    },
    {
        "STT": 115,
        "Type": "Đồ hộp",
        "Name": "Mứt đu đủ",
        "Unit": "100g",
        "Calo": 178,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 44.1
    },
    {
        "STT": 116,
        "Type": "Đồ hộp",
        "Name": "Mứt thơm",
        "Unit": "100g",
        "Calo": 208,
        "Protein": 0.5,
        "Fat": 0,
        "Carb": 51.5
    },
    {
        "STT": 117,
        "Type": "Đồ hộp",
        "Name": "Nhãn hộp",
        "Unit": "100g",
        "Calo": 62,
        "Protein": 0.5,
        "Fat": 0,
        "Carb": 15
    },
    {
        "STT": 118,
        "Type": "Đồ hộp",
        "Name": "Nước thơm",
        "Unit": "100g",
        "Calo": 38.8,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 9.4
    },
    {
        "STT": 119,
        "Type": "Đồ hộp",
        "Name": "Thịt bò hộp",
        "Unit": "100g",
        "Calo": 251,
        "Protein": 16.4,
        "Fat": 20.6,
        "Carb": 0
    },
    {
        "STT": 120,
        "Type": "Đồ hộp",
        "Name": "Thịt gà hộp",
        "Unit": "100g",
        "Calo": 273.2,
        "Protein": 17,
        "Fat": 22.8,
        "Carb": 0
    },
    {
        "STT": 121,
        "Type": "Đồ hộp",
        "Name": "Thịt heo hộp",
        "Unit": "100g",
        "Calo": 343.7,
        "Protein": 17.3,
        "Fat": 29.3,
        "Carb": 2.7
    },
    {
        "STT": 122,
        "Type": "Đồ hộp",
        "Name": "Thơm hộp",
        "Unit": "100g",
        "Calo": 56,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 13.7
    },
    {
        "STT": 123,
        "Type": "Đồ hộp",
        "Name": "Vải hộp",
        "Unit": "100g",
        "Calo": 60.4,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 14.7
    },
    {
        "STT": 124,
        "Type": "Đồ ngọt",
        "Name": "Bánh in chay",
        "Unit": "100g",
        "Calo": 376.3,
        "Protein": 3.2,
        "Fat": 0.3,
        "Carb": 90.2
    },
    {
        "STT": 125,
        "Type": "Đồ ngọt",
        "Name": "Bánh men",
        "Unit": "100g",
        "Calo": 368.5,
        "Protein": 9.6,
        "Fat": 3.7,
        "Carb": 74.2
    },
    {
        "STT": 126,
        "Type": "Đồ ngọt",
        "Name": "Bánh mì khô",
        "Unit": "100g",
        "Calo": 346.1,
        "Protein": 12.3,
        "Fat": 1.3,
        "Carb": 71.3
    },
    {
        "STT": 127,
        "Type": "Đồ ngọt",
        "Name": "Bánh sôcôla",
        "Unit": "100g",
        "Calo": 449.2,
        "Protein": 3.9,
        "Fat": 17.6,
        "Carb": 68.8
    },
    {
        "STT": 128,
        "Type": "Đồ ngọt",
        "Name": "Bánh thỏi sôcôla",
        "Unit": "100g",
        "Calo": 543.2,
        "Protein": 4.9,
        "Fat": 30.4,
        "Carb": 62.5
    },
    {
        "STT": 129,
        "Type": "Đồ ngọt",
        "Name": "Đường cát trắng",
        "Unit": "100g",
        "Calo": 397.2,
        "Protein": 0,
        "Fat": 0,
        "Carb": 99.3
    },
    {
        "STT": 130,
        "Type": "Đồ ngọt",
        "Name": "Kem cây Kido/Wall",
        "Unit": "1 cây",
        "Calo": 82.9,
        "Protein": 1.3,
        "Fat": 3.7,
        "Carb": 11.1
    },
    {
        "STT": 131,
        "Type": "Đồ ngọt",
        "Name": "Kẹo cà phê",
        "Unit": "100g",
        "Calo": 377.7,
        "Protein": 0,
        "Fat": 1.3,
        "Carb": 91.5
    },
    {
        "STT": 132,
        "Type": "Đồ ngọt",
        "Name": "Kẹo chocolate nhân đậu phộng",
        "Unit": "1 gói nhỏ",
        "Calo": 101.1,
        "Protein": 2.5,
        "Fat": 6.7,
        "Carb": 7.7
    },
    {
        "STT": 133,
        "Type": "Đồ ngọt",
        "Name": "Kẹo đậu phộng",
        "Unit": "100g",
        "Calo": 448.9,
        "Protein": 10.3,
        "Fat": 16.5,
        "Carb": 64.8
    },
    {
        "STT": 134,
        "Type": "Đồ ngọt",
        "Name": "Kẹo dẻo",
        "Unit": "1 cái nhỏ",
        "Calo": 8.8,
        "Protein": 0.2,
        "Fat": 0,
        "Carb": 2
    },
    {
        "STT": 135,
        "Type": "Đồ ngọt",
        "Name": "Kẹo dừa",
        "Unit": "1 viên nhỏ",
        "Calo": 31.3,
        "Protein": 0.1,
        "Fat": 0.9,
        "Carb": 5.7
    },
    {
        "STT": 136,
        "Type": "Đồ ngọt",
        "Name": "Kẹo dừa mềm",
        "Unit": "100g",
        "Calo": 414.6,
        "Protein": 0.6,
        "Fat": 12.2,
        "Carb": 75.6
    },
    {
        "STT": 137,
        "Type": "Đồ ngọt",
        "Name": "Kẹo ngậm bạc hà",
        "Unit": "100g",
        "Calo": 268.4,
        "Protein": 5.2,
        "Fat": 0,
        "Carb": 61.9
    },
    {
        "STT": 138,
        "Type": "Đồ ngọt",
        "Name": "Kẹo sôcôla",
        "Unit": "100g",
        "Calo": 388.2,
        "Protein": 1.6,
        "Fat": 4.6,
        "Carb": 85.1
    },
    {
        "STT": 139,
        "Type": "Đồ ngọt",
        "Name": "Kẹo sữa",
        "Unit": "100g",
        "Calo": 389.3,
        "Protein": 2.9,
        "Fat": 7.3,
        "Carb": 78
    },
    {
        "STT": 140,
        "Type": "Đồ ngọt",
        "Name": "Kẹo sữa",
        "Unit": "1 viên nhỏ",
        "Calo": 13.4,
        "Protein": 0.1,
        "Fat": 0.2,
        "Carb": 2.8
    },
    {
        "STT": 141,
        "Type": "Đồ ngọt",
        "Name": "Kẹo trái cây",
        "Unit": "1 viên nhỏ",
        "Calo": 12.4,
        "Protein": 0,
        "Fat": 0,
        "Carb": 3.1
    },
    {
        "STT": 142,
        "Type": "Đồ ngọt",
        "Name": "Mật ong",
        "Unit": "100g",
        "Calo": 326.8,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 81.3
    },
    {
        "STT": 143,
        "Type": "Đồ uống",
        "Name": "Bia",
        "Unit": "1 ly",
        "Calo": 36.4,
        "Protein": 1.6,
        "Fat": 0,
        "Carb": 7.5
    },
    {
        "STT": 144,
        "Type": "Đồ uống",
        "Name": "Cà phê đen phin",
        "Unit": "1 tách",
        "Calo": 39.6,
        "Protein": 0,
        "Fat": 0,
        "Carb": 9.9
    },
    {
        "STT": 145,
        "Type": "Đồ uống",
        "Name": "Cà phê sữa gói tan",
        "Unit": "1 tách",
        "Calo": 81.6,
        "Protein": 1,
        "Fat": 2.4,
        "Carb": 14
    },
    {
        "STT": 146,
        "Type": "Đồ uống",
        "Name": "Chôm chôm đóng hộp",
        "Unit": "1ly",
        "Calo": 138.8,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 33.8
    },
    {
        "STT": 147,
        "Type": "Đồ uống",
        "Name": "Cocktail trái cây",
        "Unit": "1 ly",
        "Calo": 158.9,
        "Protein": 0.9,
        "Fat": 0.1,
        "Carb": 38.6
    },
    {
        "STT": 148,
        "Type": "Gia vị, nước chấm",
        "Name": "Cari bột",
        "Unit": "100g",
        "Calo": 282.5,
        "Protein": 8.2,
        "Fat": 7.3,
        "Carb": 46
    },
    {
        "STT": 149,
        "Type": "Gia vị, nước chấm",
        "Name": "Gừng tươi",
        "Unit": "100g",
        "Calo": 24.8,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 5.8
    },
    {
        "STT": 150,
        "Type": "Gia vị, nước chấm",
        "Name": "Mắm tôm đặc",
        "Unit": "100g",
        "Calo": 72.7,
        "Protein": 14.8,
        "Fat": 1.5,
        "Carb": 0
    },
    {
        "STT": 151,
        "Type": "Gia vị, nước chấm",
        "Name": "Muối",
        "Unit": "100g",
        "Calo": 0,
        "Protein": 0,
        "Fat": 0,
        "Carb": 0
    },
    {
        "STT": 152,
        "Type": "Gia vị, nước chấm",
        "Name": "Nghệ khô",
        "Unit": "100g",
        "Calo": 359.5,
        "Protein": 6.3,
        "Fat": 5.1,
        "Carb": 72.1
    },
    {
        "STT": 153,
        "Type": "Gia vị, nước chấm",
        "Name": "Nghệ tươi",
        "Unit": "100g",
        "Calo": 22,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 5.2
    },
    {
        "STT": 154,
        "Type": "Gia vị, nước chấm",
        "Name": "Nước mắm",
        "Unit": "100g",
        "Calo": 28.4,
        "Protein": 7.1,
        "Fat": 0,
        "Carb": 0
    },
    {
        "STT": 155,
        "Type": "Gia vị, nước chấm",
        "Name": "Tôm chua",
        "Unit": "100g",
        "Calo": 67.6,
        "Protein": 8.7,
        "Fat": 1.2,
        "Carb": 5.5
    },
    {
        "STT": 156,
        "Type": "Gia vị, nước chấm",
        "Name": "Tương ớt",
        "Unit": "100g",
        "Calo": 36.9,
        "Protein": 0.5,
        "Fat": 0.5,
        "Carb": 7.6
    },
    {
        "STT": 157,
        "Type": "Gia vị, nước chấm",
        "Name": "Xì dầu",
        "Unit": "100g",
        "Calo": 28,
        "Protein": 7,
        "Fat": 0,
        "Carb": 0
    },
    {
        "STT": 158,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Cùi dừa già",
        "Unit": "100g",
        "Calo": 368,
        "Protein": 4.8,
        "Fat": 36,
        "Carb": 6.2
    },
    {
        "STT": 159,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Cùi dừa non",
        "Unit": "100g",
        "Calo": 39.7,
        "Protein": 3.5,
        "Fat": 1.7,
        "Carb": 2.6
    },
    {
        "STT": 160,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu đen (hạt)",
        "Unit": "100g",
        "Calo": 325.3,
        "Protein": 24.2,
        "Fat": 1.7,
        "Carb": 53.3
    },
    {
        "STT": 161,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu Hà lan (hạt)",
        "Unit": "100g",
        "Calo": 341.8,
        "Protein": 22.2,
        "Fat": 1.4,
        "Carb": 60.1
    },
    {
        "STT": 162,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu phộng",
        "Unit": "100g",
        "Calo": 572.5,
        "Protein": 27.5,
        "Fat": 44.5,
        "Carb": 15.5
    },
    {
        "STT": 163,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu phụ",
        "Unit": "100g",
        "Calo": 95,
        "Protein": 10.9,
        "Fat": 5.4,
        "Carb": 0.7
    },
    {
        "STT": 164,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu tương (đậu nành)",
        "Unit": "100g",
        "Calo": 400,
        "Protein": 34,
        "Fat": 18.4,
        "Carb": 24.6
    },
    {
        "STT": 165,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu xanh",
        "Unit": "100g",
        "Calo": 327.6,
        "Protein": 23.4,
        "Fat": 2.4,
        "Carb": 53.1
    },
    {
        "STT": 166,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Hạt điều",
        "Unit": "100g",
        "Calo": 605.1,
        "Protein": 18.4,
        "Fat": 46.3,
        "Carb": 28.7
    },
    {
        "STT": 167,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Mè",
        "Unit": "100g",
        "Calo": 568.4,
        "Protein": 20.1,
        "Fat": 46.4,
        "Carb": 17.6
    },
    {
        "STT": 168,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Sữa đậu nành",
        "Unit": "100g",
        "Calo": 28.4,
        "Protein": 3.1,
        "Fat": 1.6,
        "Carb": 0.4
    },
    {
        "STT": 169,
        "Type": "Món mặn",
        "Name": "Bầu xào trứng",
        "Unit": "1 đĩa",
        "Calo": 108.5,
        "Protein": 4,
        "Fat": 8.5,
        "Carb": 4
    },
    {
        "STT": 170,
        "Type": "Món mặn",
        "Name": "Bò bía",
        "Unit": "3 cuốn",
        "Calo": 92.7,
        "Protein": 5.8,
        "Fat": 4.3,
        "Carb": 7.7
    },
    {
        "STT": 171,
        "Type": "Món mặn",
        "Name": "Bò cuốn lá lốt",
        "Unit": "8 cuốn",
        "Calo": 840.9,
        "Protein": 49,
        "Fat": 12.5,
        "Carb": 133.1
    },
    {
        "STT": 172,
        "Type": "Món mặn",
        "Name": "Bò cuốn mỡ chài",
        "Unit": "8 cuốn",
        "Calo": 1180.1,
        "Protein": 60.4,
        "Fat": 46.1,
        "Carb": 130.9
    },
    {
        "STT": 173,
        "Type": "Món mặn",
        "Name": "Bông cải xào thập cẩm",
        "Unit": "1 đĩa",
        "Calo": 141.9,
        "Protein": 6.7,
        "Fat": 6.3,
        "Carb": 14.6
    },
    {
        "STT": 174,
        "Type": "Món mặn",
        "Name": "Cá bạc má chiên",
        "Unit": "1 con",
        "Calo": 134.3,
        "Protein": 13.1,
        "Fat": 9.1,
        "Carb": 0
    },
    {
        "STT": 175,
        "Type": "Món mặn",
        "Name": "Cá bạc má kho",
        "Unit": "1 con",
        "Calo": 166.9,
        "Protein": 21.1,
        "Fat": 5.3,
        "Carb": 8.7
    },
    {
        "STT": 176,
        "Type": "Món mặn",
        "Name": "Cá chép chưng tương",
        "Unit": "1 con",
        "Calo": 156.6,
        "Protein": 16.4,
        "Fat": 6.6,
        "Carb": 7.9
    },
    {
        "STT": 177,
        "Type": "Món mặn",
        "Name": "Cá chim chiên",
        "Unit": "1 con",
        "Calo": 110.4,
        "Protein": 10.5,
        "Fat": 7.6,
        "Carb": 0
    },
    {
        "STT": 178,
        "Type": "Món mặn",
        "Name": "Cà chua dồn thịt",
        "Unit": "2 trái",
        "Calo": 130.8,
        "Protein": 7.3,
        "Fat": 7.2,
        "Carb": 9.2
    },
    {
        "STT": 180,
        "Type": "Món mặn",
        "Name": "Cá cơm lăn bột chiên",
        "Unit": "1 đĩa",
        "Calo": 316.1,
        "Protein": 6.7,
        "Fat": 17.3,
        "Carb": 33.4
    },
    {
        "STT": 181,
        "Type": "Món mặn",
        "Name": "Cá đối chiên",
        "Unit": "1 con",
        "Calo": 108.5,
        "Protein": 9.8,
        "Fat": 7.7,
        "Carb": 0
    },
    {
        "STT": 182,
        "Type": "Món mặn",
        "Name": "Cá đối kho",
        "Unit": "1 con",
        "Calo": 82.7,
        "Protein": 10.2,
        "Fat": 2.7,
        "Carb": 4.4
    },
    {
        "STT": 183,
        "Type": "Món mặn",
        "Name": "Cá hú kho",
        "Unit": "1 lát cá",
        "Calo": 184.5,
        "Protein": 15.6,
        "Fat": 9.7,
        "Carb": 8.7
    },
    {
        "STT": 184,
        "Type": "Món mặn",
        "Name": "Cá lóc chiên",
        "Unit": "1 lát",
        "Calo": 169.4,
        "Protein": 14.9,
        "Fat": 12.2,
        "Carb": 0
    },
    {
        "STT": 185,
        "Type": "Món mặn",
        "Name": "Cá lóc kho",
        "Unit": "1 lát cá",
        "Calo": 131.8,
        "Protein": 15.7,
        "Fat": 3.8,
        "Carb": 8.7
    },
    {
        "STT": 186,
        "Type": "Món mặn",
        "Name": "Cá mòi kho",
        "Unit": "1 đĩa",
        "Calo": 105.4,
        "Protein": 4.3,
        "Fat": 5,
        "Carb": 10.8
    },
    {
        "STT": 187,
        "Type": "Món mặn",
        "Name": "Cá ngừ kho",
        "Unit": "1 lát cá",
        "Calo": 121.8,
        "Protein": 17.7,
        "Fat": 1.8,
        "Carb": 8.7
    },
    {
        "STT": 188,
        "Type": "Món mặn",
        "Name": "Cà ri",
        "Unit": "1 tô",
        "Calo": 277.8,
        "Protein": 7.8,
        "Fat": 11.4,
        "Carb": 36
    },
    {
        "STT": 189,
        "Type": "Món mặn",
        "Name": "Cà tím nướng",
        "Unit": "1 đĩa",
        "Calo": 33.2,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 6.8
    },
    {
        "STT": 190,
        "Type": "Món mặn",
        "Name": "Cá trê chiên",
        "Unit": "1 con",
        "Calo": 219.7,
        "Protein": 12.4,
        "Fat": 18.9,
        "Carb": 0
    },
    {
        "STT": 191,
        "Type": "Món mặn",
        "Name": "Cá viên kho",
        "Unit": "10 viên nhỏ",
        "Calo": 99.6,
        "Protein": 15.1,
        "Fat": 2.8,
        "Carb": 3.5
    },
    {
        "STT": 192,
        "Type": "Món mặn",
        "Name": "Chả cá thác lác chiên",
        "Unit": "1 miếng tròn",
        "Calo": 133.3,
        "Protein": 11.3,
        "Fat": 9.7,
        "Carb": 0.2
    },
    {
        "STT": 193,
        "Type": "Món mặn",
        "Name": "Chả giò chiên",
        "Unit": "10 cuốn",
        "Calo": 40.5,
        "Protein": 1.8,
        "Fat": 2.1,
        "Carb": 3.6
    },
    {
        "STT": 194,
        "Type": "Món mặn",
        "Name": "Chả lụa chiên",
        "Unit": "1 cái tròn",
        "Calo": 336.1,
        "Protein": 36.7,
        "Fat": 18.5,
        "Carb": 5.7
    },
    {
        "STT": 195,
        "Type": "Món mặn",
        "Name": "Chả lụa kho",
        "Unit": "1 khoanh",
        "Calo": 102.2,
        "Protein": 11.7,
        "Fat": 4.6,
        "Carb": 3.5
    },
    {
        "STT": 196,
        "Type": "Món mặn",
        "Name": "Chả trứng chưng",
        "Unit": "1 lát",
        "Calo": 126.7,
        "Protein": 10.8,
        "Fat": 5.1,
        "Carb": 9.4
    },
    {
        "STT": 197,
        "Type": "Món mặn",
        "Name": "Chim cút chiên bơ",
        "Unit": "1 con",
        "Calo": 203.7,
        "Protein": 10.6,
        "Fat": 16.9,
        "Carb": 2.3
    },
    {
        "STT": 198,
        "Type": "Món mặn",
        "Name": "Đậu hủ chiên xả",
        "Unit": "1 miếng",
        "Calo": 148.2,
        "Protein": 11.6,
        "Fat": 11,
        "Carb": 0.7
    },
    {
        "STT": 199,
        "Type": "Món mặn",
        "Name": "Đậu hủ dồn thịt",
        "Unit": "1 miếng lớn",
        "Calo": 328.2,
        "Protein": 18.7,
        "Fat": 25.8,
        "Carb": 5.3
    },
    {
        "STT": 200,
        "Type": "Món mặn",
        "Name": "Đậu hủ dồn thịt",
        "Unit": "1 miếng",
        "Calo": 196.3,
        "Protein": 9.1,
        "Fat": 14.3,
        "Carb": 7.8
    },
    {
        "STT": 201,
        "Type": "Món mặn",
        "Name": "Đậu hủ sốt cà",
        "Unit": "1 đĩa",
        "Calo": 238.8,
        "Protein": 18.1,
        "Fat": 13.6,
        "Carb": 11
    },
    {
        "STT": 202,
        "Type": "Món mặn",
        "Name": "Đùi gà chiên",
        "Unit": "1 cái",
        "Calo": 173.1,
        "Protein": 11,
        "Fat": 12.3,
        "Carb": 4.6
    },
    {
        "STT": 203,
        "Type": "Món mặn",
        "Name": "Gà kho gừng",
        "Unit": "1 đĩa",
        "Calo": 300.7,
        "Protein": 21.9,
        "Fat": 19.1,
        "Carb": 10.3
    },
    {
        "STT": 204,
        "Type": "Món mặn",
        "Name": "Gà rô ti",
        "Unit": "1 cái đùi",
        "Calo": 300.3,
        "Protein": 20.3,
        "Fat": 23.1,
        "Carb": 2.8
    },
    {
        "STT": 205,
        "Type": "Món mặn",
        "Name": "Gà xào sả ớt",
        "Unit": "1 đĩa",
        "Calo": 272.3,
        "Protein": 20.4,
        "Fat": 19.1,
        "Carb": 4.7
    },
    {
        "STT": 206,
        "Type": "Món mặn",
        "Name": "Gan heo xào",
        "Unit": "1 đĩa",
        "Calo": 200.1,
        "Protein": 24.8,
        "Fat": 9.7,
        "Carb": 3.4
    },
    {
        "STT": 207,
        "Type": "Món mặn",
        "Name": "Giò cháo quẩy",
        "Unit": "1 cái đôi",
        "Calo": 116.7,
        "Protein": 3.2,
        "Fat": 4.3,
        "Carb": 16.3
    },
    {
        "STT": 208,
        "Type": "Món mặn",
        "Name": "Gỏi bắp chuối",
        "Unit": "1 đĩa",
        "Calo": 123.2,
        "Protein": 5.1,
        "Fat": 6.4,
        "Carb": 11.3
    },
    {
        "STT": 209,
        "Type": "Món mặn",
        "Name": "Gỏi bì cuốn",
        "Unit": "3 cuốn",
        "Calo": 116,
        "Protein": 10.3,
        "Fat": 3.6,
        "Carb": 10.6
    },
    {
        "STT": 210,
        "Type": "Món mặn",
        "Name": "Gỏi khô bò",
        "Unit": "1 đĩa",
        "Calo": 267.1,
        "Protein": 15.8,
        "Fat": 11.5,
        "Carb": 25.1
    },
    {
        "STT": 211,
        "Type": "Món mặn",
        "Name": "Gỏi ngó sen",
        "Unit": "1 đĩa",
        "Calo": 286.1,
        "Protein": 12.2,
        "Fat": 9.3,
        "Carb": 38.4
    },
    {
        "STT": 212,
        "Type": "Món mặn",
        "Name": "Gỏi tôm cuốn",
        "Unit": "3 cuốn",
        "Calo": 147,
        "Protein": 7.7,
        "Fat": 5,
        "Carb": 17.8
    },
    {
        "STT": 213,
        "Type": "Món mặn",
        "Name": "Há cảo",
        "Unit": "1 đĩa",
        "Calo": 363.4,
        "Protein": 7.4,
        "Fat": 12.2,
        "Carb": 56
    },
    {
        "STT": 214,
        "Type": "Món mặn",
        "Name": "Khổ qua xào trứng",
        "Unit": "1 đĩa",
        "Calo": 113.3,
        "Protein": 4.6,
        "Fat": 8.5,
        "Carb": 4.6
    },
    {
        "STT": 215,
        "Type": "Món mặn",
        "Name": "Khoai tây bò bít tết",
        "Unit": "1 đĩa",
        "Calo": 246.5,
        "Protein": 12.4,
        "Fat": 12.9,
        "Carb": 20.2
    },
    {
        "STT": 216,
        "Type": "Món mặn",
        "Name": "Lạp xưởng chiên",
        "Unit": "1 cái",
        "Calo": 292.7,
        "Protein": 10.4,
        "Fat": 27.5,
        "Carb": 0.9
    },
    {
        "STT": 217,
        "Type": "Món mặn",
        "Name": "Mắm chưng",
        "Unit": "1 miếng tròn",
        "Calo": 194.1,
        "Protein": 13.3,
        "Fat": 13.7,
        "Carb": 4.4
    },
    {
        "STT": 218,
        "Type": "Món mặn",
        "Name": "Mắm Thái",
        "Unit": "1 đĩa",
        "Calo": 166.6,
        "Protein": 11.1,
        "Fat": 7.4,
        "Carb": 13.9
    },
    {
        "STT": 219,
        "Type": "Món mặn",
        "Name": "Măng kho thập cẩm",
        "Unit": "1 đĩa",
        "Calo": 141.4,
        "Protein": 8.9,
        "Fat": 6.2,
        "Carb": 12.5
    },
    {
        "STT": 220,
        "Type": "Món mặn",
        "Name": "Mít kho",
        "Unit": "1 đĩa",
        "Calo": 99.8,
        "Protein": 3.7,
        "Fat": 5,
        "Carb": 10
    },
    {
        "STT": 221,
        "Type": "Món mặn",
        "Name": "Mực xào sả ớt",
        "Unit": "1 đĩa",
        "Calo": 184.7,
        "Protein": 31,
        "Fat": 6.7,
        "Carb": 0.1
    },
    {
        "STT": 222,
        "Type": "Món mặn",
        "Name": "Mực xào thập cẩm",
        "Unit": "1 đĩa",
        "Calo": 136.7,
        "Protein": 17.4,
        "Fat": 5.9,
        "Carb": 3.5
    },
    {
        "STT": 223,
        "Type": "Món mặn",
        "Name": "Nấm rơm kho",
        "Unit": "1 đĩa",
        "Calo": 153.7,
        "Protein": 7.5,
        "Fat": 10.5,
        "Carb": 7.3
    },
    {
        "STT": 225,
        "Type": "Món mặn",
        "Name": "Sườn nướng",
        "Unit": "1 miếng",
        "Calo": 123.6,
        "Protein": 10.6,
        "Fat": 7.2,
        "Carb": 4.1
    },
    {
        "STT": 226,
        "Type": "Món mặn",
        "Name": "Sườn ram",
        "Unit": "1 miếng",
        "Calo": 155.7,
        "Protein": 10.9,
        "Fat": 11.3,
        "Carb": 2.6
    },
    {
        "STT": 228,
        "Type": "Món mặn",
        "Name": "Tàu hủ ky chiên",
        "Unit": "1 đĩa",
        "Calo": 306.6,
        "Protein": 37.2,
        "Fat": 15.4,
        "Carb": 4.8
    },
    {
        "STT": 229,
        "Type": "Món mặn",
        "Name": "Tép rang",
        "Unit": "10 con",
        "Calo": 100.1,
        "Protein": 5.6,
        "Fat": 6.5,
        "Carb": 4.8
    },
    {
        "STT": 230,
        "Type": "Món mặn",
        "Name": "Thị heo quay",
        "Unit": "1 đĩa",
        "Calo": 144.8,
        "Protein": 9.2,
        "Fat": 12,
        "Carb": 0
    },
    {
        "STT": 231,
        "Type": "Món mặn",
        "Name": "Thịt bò xào đậu que",
        "Unit": "1 đĩa",
        "Calo": 195.7,
        "Protein": 16.8,
        "Fat": 6.9,
        "Carb": 16.6
    },
    {
        "STT": 232,
        "Type": "Món mặn",
        "Name": "Thịt bò xào giá hẹ",
        "Unit": "1 đĩa",
        "Calo": 143.7,
        "Protein": 15.6,
        "Fat": 6.9,
        "Carb": 4.8
    },
    {
        "STT": 233,
        "Type": "Món mặn",
        "Name": "Thịt bò xào hành tây",
        "Unit": "1 đĩa",
        "Calo": 132.5,
        "Protein": 11.8,
        "Fat": 6.9,
        "Carb": 5.8
    },
    {
        "STT": 234,
        "Type": "Món mặn",
        "Name": "Thịt bò xào măng",
        "Unit": "1 đĩa",
        "Calo": 104.1,
        "Protein": 10.5,
        "Fat": 6.9,
        "Carb": 0
    },
    {
        "STT": 235,
        "Type": "Món mặn",
        "Name": "Thịt bò xào nấm rơm",
        "Unit": "1 đĩa",
        "Calo": 152,
        "Protein": 13.5,
        "Fat": 9.6,
        "Carb": 2.9
    },
    {
        "STT": 236,
        "Type": "Món mặn",
        "Name": "Thịt heo phá lấu",
        "Unit": "1 đĩa",
        "Calo": 241.1,
        "Protein": 13.9,
        "Fat": 19.9,
        "Carb": 1.6
    },
    {
        "STT": 237,
        "Type": "Món mặn",
        "Name": "Thịt heo quay",
        "Unit": "1 đĩa",
        "Calo": 249.7,
        "Protein": 7,
        "Fat": 14.1,
        "Carb": 23.7
    },
    {
        "STT": 238,
        "Type": "Món mặn",
        "Name": "Thịt heo xào đậu que",
        "Unit": "1 đĩa",
        "Calo": 240.2,
        "Protein": 20.5,
        "Fat": 10.2,
        "Carb": 16.6
    },
    {
        "STT": 239,
        "Type": "Món mặn",
        "Name": "Thịt heo xào giá hẹ",
        "Unit": "1 đĩa",
        "Calo": 188.2,
        "Protein": 19.3,
        "Fat": 10.2,
        "Carb": 4.8
    },
    {
        "STT": 241,
        "Type": "Món mặn",
        "Name": "Thịt kho tiêu",
        "Unit": "1 đĩa",
        "Calo": 312,
        "Protein": 22.5,
        "Fat": 16,
        "Carb": 19.5
    },
    {
        "STT": 242,
        "Type": "Món mặn",
        "Name": "Thịt kho trứng",
        "Unit": "1 trứng+2 miếng thịt",
        "Calo": 315.3,
        "Protein": 19.8,
        "Fat": 22.9,
        "Carb": 7.5
    },
    {
        "STT": 243,
        "Type": "Món mặn",
        "Name": "Tôm lăn bột chiên",
        "Unit": "1 đĩa",
        "Calo": 246.5,
        "Protein": 2.6,
        "Fat": 10.1,
        "Carb": 36.3
    },
    {
        "STT": 244,
        "Type": "Món mặn",
        "Name": "Tôm sốt cà",
        "Unit": "1 đĩa",
        "Calo": 248.1,
        "Protein": 12.5,
        "Fat": 9.3,
        "Carb": 28.6
    },
    {
        "STT": 245,
        "Type": "Món mặn",
        "Name": "Xíu mại",
        "Unit": "2 viên",
        "Calo": 103.8,
        "Protein": 11.9,
        "Fat": 4.2,
        "Carb": 4.6
    },
    {
        "STT": 246,
        "Type": "Món sợi",
        "Name": "Bánh canh cua",
        "Unit": "1 tô",
        "Calo": 378.4,
        "Protein": 21.4,
        "Fat": 8.4,
        "Carb": 54.3
    },
    {
        "STT": 247,
        "Type": "Món sợi",
        "Name": "Bánh canh giò heo",
        "Unit": "1 tô",
        "Calo": 482.8,
        "Protein": 19,
        "Fat": 23.6,
        "Carb": 48.6
    },
    {
        "STT": 248,
        "Type": "Món sợi",
        "Name": "Bánh canh thịt gà",
        "Unit": "1 tô",
        "Calo": 345.1,
        "Protein": 12.8,
        "Fat": 11.1,
        "Carb": 48.5
    },
    {
        "STT": 249,
        "Type": "Món sợi",
        "Name": "Bánh canh thịt heo",
        "Unit": "1 tô",
        "Calo": 321.7,
        "Protein": 12.8,
        "Fat": 8.5,
        "Carb": 48.5
    },
    {
        "STT": 250,
        "Type": "Món sợi",
        "Name": "Bột chiên",
        "Unit": "1 đĩa",
        "Calo": 443,
        "Protein": 13.2,
        "Fat": 25.8,
        "Carb": 39.5
    },
    {
        "STT": 251,
        "Type": "Món sợi",
        "Name": "Bún bò huế",
        "Unit": "1 tô",
        "Calo": 478.8,
        "Protein": 18.4,
        "Fat": 16,
        "Carb": 65.3
    },
    {
        "STT": 252,
        "Type": "Món sợi",
        "Name": "Bún bò huế (giò)",
        "Unit": "1 tô",
        "Calo": 621.8,
        "Protein": 30.2,
        "Fat": 30.6,
        "Carb": 56.4
    },
    {
        "STT": 253,
        "Type": "Món sợi",
        "Name": "Bún mắm",
        "Unit": "1 tô",
        "Calo": 479.5,
        "Protein": 28.2,
        "Fat": 15.5,
        "Carb": 56.8
    },
    {
        "STT": 254,
        "Type": "Món sợi",
        "Name": "Bún măng",
        "Unit": "1 tô",
        "Calo": 484.7,
        "Protein": 20.9,
        "Fat": 19.5,
        "Carb": 56.4
    },
    {
        "STT": 255,
        "Type": "Món sợi",
        "Name": "Bún mộc",
        "Unit": "1 tô",
        "Calo": 513,
        "Protein": 28.1,
        "Fat": 19.4,
        "Carb": 56.5
    },
    {
        "STT": 256,
        "Type": "Món sợi",
        "Name": "Bún riêu",
        "Unit": "1 tô",
        "Calo": 481.2,
        "Protein": 16.5,
        "Fat": 16.8,
        "Carb": 66
    },
    {
        "STT": 257,
        "Type": "Món sợi",
        "Name": "Bún riêu cua",
        "Unit": "1 tô",
        "Calo": 413,
        "Protein": 17.8,
        "Fat": 12.2,
        "Carb": 58
    },
    {
        "STT": 258,
        "Type": "Món sợi",
        "Name": "Bún riêu ốc",
        "Unit": "1 tô",
        "Calo": 530.4,
        "Protein": 28.4,
        "Fat": 17.2,
        "Carb": 65.5
    },
    {
        "STT": 259,
        "Type": "Món sợi",
        "Name": "Bún thịt nướng",
        "Unit": "1 tô",
        "Calo": 451.3,
        "Protein": 14.7,
        "Fat": 13.7,
        "Carb": 67.3
    },
    {
        "STT": 260,
        "Type": "Món sợi",
        "Name": "Bún thịt nướng chả giò",
        "Unit": "1 tô",
        "Calo": 598.04,
        "Protein": 24,
        "Fat": 21.16,
        "Carb": 77.9
    },
    {
        "STT": 261,
        "Type": "Món sợi",
        "Name": "Bún xào",
        "Unit": "1 đĩa",
        "Calo": 569.6,
        "Protein": 23.4,
        "Fat": 28,
        "Carb": 56
    },
    {
        "STT": 262,
        "Type": "Món sợi",
        "Name": "Canh bún",
        "Unit": "1 tô",
        "Calo": 294.9,
        "Protein": 13.6,
        "Fat": 6.9,
        "Carb": 44.6
    },
    {
        "STT": 263,
        "Type": "Món sợi",
        "Name": "Hoành thánh",
        "Unit": "1 tô",
        "Calo": 242.6,
        "Protein": 12.3,
        "Fat": 7.4,
        "Carb": 31.7
    },
    {
        "STT": 264,
        "Type": "Món sợi",
        "Name": "Hủ tíu bò kho",
        "Unit": "1 tô",
        "Calo": 410.2,
        "Protein": 17,
        "Fat": 13.4,
        "Carb": 55.4
    },
    {
        "STT": 265,
        "Type": "Món sợi",
        "Name": "Hủ tíu giò heo",
        "Unit": "1 tô",
        "Calo": 637,
        "Protein": 29,
        "Fat": 33,
        "Carb": 55.9
    },
    {
        "STT": 266,
        "Type": "Món sợi",
        "Name": "Hủ tíu mì",
        "Unit": "1 tô",
        "Calo": 410.5,
        "Protein": 16.7,
        "Fat": 12.9,
        "Carb": 56.9
    },
    {
        "STT": 267,
        "Type": "Món sợi",
        "Name": "Hủ tíu Nam vang",
        "Unit": "1 tô",
        "Calo": 400.4,
        "Protein": 24.3,
        "Fat": 14.8,
        "Carb": 42.5
    },
    {
        "STT": 268,
        "Type": "Món sợi",
        "Name": "Hủ tíu thịt heo",
        "Unit": "1 tô",
        "Calo": 361.3,
        "Protein": 14.4,
        "Fat": 12.5,
        "Carb": 47.8
    },
    {
        "STT": 269,
        "Type": "Món sợi",
        "Name": "Hủ tíu xào",
        "Unit": "1 đĩa",
        "Calo": 646.3,
        "Protein": 41.4,
        "Fat": 25.5,
        "Carb": 62.8
    },
    {
        "STT": 270,
        "Type": "Món sợi",
        "Name": "Mì bò viên",
        "Unit": "1 tô",
        "Calo": 456,
        "Protein": 19.5,
        "Fat": 14.4,
        "Carb": 62.1
    },
    {
        "STT": 271,
        "Type": "Món sợi",
        "Name": "Mì căn xào sả",
        "Unit": "1 đĩa",
        "Calo": 298.6,
        "Protein": 7.7,
        "Fat": 5.8,
        "Carb": 53.9
    },
    {
        "STT": 272,
        "Type": "Món sợi",
        "Name": "Mì quảng",
        "Unit": "1 tô",
        "Calo": 541,
        "Protein": 22.4,
        "Fat": 20.2,
        "Carb": 67.4
    },
    {
        "STT": 273,
        "Type": "Món sợi",
        "Name": "Mì thịt heo",
        "Unit": "1 tô",
        "Calo": 415.4,
        "Protein": 19,
        "Fat": 8.2,
        "Carb": 66.4
    },
    {
        "STT": 274,
        "Type": "Món sợi",
        "Name": "Mì vịt tiềm",
        "Unit": "1 tô",
        "Calo": 776.6,
        "Protein": 32.9,
        "Fat": 43,
        "Carb": 64.5
    },
    {
        "STT": 275,
        "Type": "Món sợi",
        "Name": "Mì xào dòn",
        "Unit": "1 đĩa",
        "Calo": 638.9,
        "Protein": 42.2,
        "Fat": 29.3,
        "Carb": 51.6
    },
    {
        "STT": 276,
        "Type": "Món sợi",
        "Name": "Miến gà",
        "Unit": "1 tô",
        "Calo": 634.9,
        "Protein": 17.8,
        "Fat": 18.1,
        "Carb": 100.2
    },
    {
        "STT": 277,
        "Type": "Món sợi",
        "Name": "Nui chiên",
        "Unit": "1 đĩa",
        "Calo": 523.5,
        "Protein": 18.2,
        "Fat": 24.3,
        "Carb": 58
    },
    {
        "STT": 278,
        "Type": "Món sợi",
        "Name": "Nui thịt heo",
        "Unit": "1 đĩa",
        "Calo": 399.3,
        "Protein": 17.5,
        "Fat": 9.3,
        "Carb": 61.4
    },
    {
        "STT": 279,
        "Type": "Món sợi",
        "Name": "Phở bò chín",
        "Unit": "1 tô",
        "Calo": 430.6,
        "Protein": 20.9,
        "Fat": 12.2,
        "Carb": 59.3
    },
    {
        "STT": 280,
        "Type": "Món sợi",
        "Name": "Phở bò tái",
        "Unit": "1 tô",
        "Calo": 414.1,
        "Protein": 17.9,
        "Fat": 11.7,
        "Carb": 59.3
    },
    {
        "STT": 281,
        "Type": "Món sợi",
        "Name": "Phở bò viên",
        "Unit": "1 tô",
        "Calo": 430.5,
        "Protein": 16.3,
        "Fat": 14.1,
        "Carb": 59.6
    },
    {
        "STT": 282,
        "Type": "Món sợi",
        "Name": "Phở gà",
        "Unit": "1 tô",
        "Calo": 483.5,
        "Protein": 21.3,
        "Fat": 17.9,
        "Carb": 59.3
    },
    {
        "STT": 283,
        "Type": "Món trứng",
        "Name": "Hột vịt muối",
        "Unit": "1 trái",
        "Calo": 90.6,
        "Protein": 6.4,
        "Fat": 7,
        "Carb": 0.5
    },
    {
        "STT": 284,
        "Type": "Món trứng",
        "Name": "Trứng cút",
        "Unit": "1 trái",
        "Calo": 17.2,
        "Protein": 1.5,
        "Fat": 1.2,
        "Carb": 0.1
    },
    {
        "STT": 285,
        "Type": "Món trứng",
        "Name": "Trứng gà Mỹ",
        "Unit": "1 trái",
        "Calo": 81.3,
        "Protein": 7.3,
        "Fat": 5.7,
        "Carb": 0.2
    },
    {
        "STT": 286,
        "Type": "Món trứng",
        "Name": "Trứng gà ta",
        "Unit": "1 trái",
        "Calo": 58.5,
        "Protein": 5.2,
        "Fat": 4.1,
        "Carb": 0.2
    },
    {
        "STT": 287,
        "Type": "Món trứng",
        "Name": "Trứng vịt bắc thảo",
        "Unit": "1 trái",
        "Calo": 89.7,
        "Protein": 6,
        "Fat": 7.3,
        "Carb": 0
    },
    {
        "STT": 288,
        "Type": "Món trứng",
        "Name": "Trứng vịt luộc",
        "Unit": "1 trái",
        "Calo": 90.6,
        "Protein": 6.4,
        "Fat": 7,
        "Carb": 0.5
    },
    {
        "STT": 289,
        "Type": "Ngũ cốc",
        "Name": "Bánh bao",
        "Unit": "100g",
        "Calo": 218.9,
        "Protein": 6.1,
        "Fat": 0.5,
        "Carb": 47.5
    },
    {
        "STT": 290,
        "Type": "Ngũ cốc",
        "Name": "Bánh đúc",
        "Unit": "100g",
        "Calo": 51.5,
        "Protein": 0.9,
        "Fat": 0.3,
        "Carb": 11.3
    },
    {
        "STT": 291,
        "Type": "Ngũ cốc",
        "Name": "Bánh mì",
        "Unit": "100g",
        "Calo": 249.2,
        "Protein": 7.9,
        "Fat": 0.8,
        "Carb": 52.6
    },
    {
        "STT": 292,
        "Type": "Ngũ cốc",
        "Name": "Bánh phở",
        "Unit": "100g",
        "Calo": 141.2,
        "Protein": 3.2,
        "Fat": 0,
        "Carb": 32.1
    },
    {
        "STT": 293,
        "Type": "Ngũ cốc",
        "Name": "Bánh tráng mỏng",
        "Unit": "100g",
        "Calo": 333.4,
        "Protein": 4,
        "Fat": 0.2,
        "Carb": 78.9
    },
    {
        "STT": 294,
        "Type": "Ngũ cốc",
        "Name": "Bắp tươi",
        "Unit": "100g",
        "Calo": 195.5,
        "Protein": 4.1,
        "Fat": 2.3,
        "Carb": 39.6
    },
    {
        "STT": 295,
        "Type": "Ngũ cốc",
        "Name": "Bún (đã nấu)",
        "Unit": "100g",
        "Calo": 109.6,
        "Protein": 1.7,
        "Fat": 0,
        "Carb": 25.7
    },
    {
        "STT": 296,
        "Type": "Ngũ cốc",
        "Name": "Cơm trắng",
        "Unit": "100g",
        "Calo": 130,
        "Protein": 3,
        "Fat": 0,
        "Carb": 29.5
    },
    {
        "STT": 297,
        "Type": "Ngũ cốc",
        "Name": "Cơm trắng",
        "Unit": "1 đĩa cơm phần",
        "Calo": 407.6,
        "Protein": 9.3,
        "Fat": 1.2,
        "Carb": 89.9
    },
    {
        "STT": 298,
        "Type": "Ngũ cốc",
        "Name": "Gạo nếp cái",
        "Unit": "100g",
        "Calo": 345.9,
        "Protein": 8.2,
        "Fat": 1.5,
        "Carb": 74.9
    },
    {
        "STT": 299,
        "Type": "Ngũ cốc",
        "Name": "Gạo tẻ",
        "Unit": "100g",
        "Calo": 344.6,
        "Protein": 7.8,
        "Fat": 1,
        "Carb": 76.1
    },
    {
        "STT": 300,
        "Type": "Ngũ cốc",
        "Name": "Ngô tươi",
        "Unit": "100g",
        "Calo": 195.5,
        "Protein": 4.1,
        "Fat": 2.3,
        "Carb": 39.6
    },
    {
        "STT": 301,
        "Type": "Ngũ cốc",
        "Name": "Ngô vàng hạt vàng",
        "Unit": "100g",
        "Calo": 354.3,
        "Protein": 8.6,
        "Fat": 4.7,
        "Carb": 69.4
    },
    {
        "STT": 302,
        "Type": "Nước giải khát",
        "Name": "Bia",
        "Unit": "100g",
        "Calo": 42.4,
        "Protein": 1.6,
        "Fat": 0,
        "Carb": 9
    },
    {
        "STT": 303,
        "Type": "Nước giải khát",
        "Name": "CocaCola",
        "Unit": "100g",
        "Calo": 41.6,
        "Protein": 0,
        "Fat": 0,
        "Carb": 10.4
    },
    {
        "STT": 304,
        "Type": "Nước giải khát",
        "Name": "Rượu nếp",
        "Unit": "100g",
        "Calo": 166.8,
        "Protein": 4,
        "Fat": 0,
        "Carb": 37.7
    },
    {
        "STT": 305,
        "Type": "Quả chín",
        "Name": "Bưởi",
        "Unit": "100g",
        "Calo": 30,
        "Protein": 0.2,
        "Fat": 0,
        "Carb": 7.3
    },
    {
        "STT": 306,
        "Type": "Quả chín",
        "Name": "Cam",
        "Unit": "100g",
        "Calo": 37.2,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 8.4
    },
    {
        "STT": 307,
        "Type": "Quả chín",
        "Name": "Chanh",
        "Unit": "100g",
        "Calo": 22.8,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 4.8
    },
    {
        "STT": 308,
        "Type": "Quả chín",
        "Name": "Chôm chôm",
        "Unit": "100g",
        "Calo": 71.6,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 16.4
    },
    {
        "STT": 309,
        "Type": "Quả chín",
        "Name": "Chuối tây",
        "Unit": "100g",
        "Calo": 66.3,
        "Protein": 0.9,
        "Fat": 0.3,
        "Carb": 15
    },
    {
        "STT": 310,
        "Type": "Quả chín",
        "Name": "Chuối tiêu",
        "Unit": "100g",
        "Calo": 96.6,
        "Protein": 1.5,
        "Fat": 0.2,
        "Carb": 22.2
    },
    {
        "STT": 311,
        "Type": "Quả chín",
        "Name": "Đu đủ chín",
        "Unit": "100g",
        "Calo": 34.8,
        "Protein": 1,
        "Fat": 0,
        "Carb": 7.7
    },
    {
        "STT": 312,
        "Type": "Quả chín",
        "Name": "Dưa hấu",
        "Unit": "100g",
        "Calo": 15.8,
        "Protein": 1.2,
        "Fat": 0.2,
        "Carb": 2.3
    },
    {
        "STT": 313,
        "Type": "Quả chín",
        "Name": "Dứa ta",
        "Unit": "100g",
        "Calo": 29.2,
        "Protein": 0.8,
        "Fat": 0,
        "Carb": 6.5
    },
    {
        "STT": 314,
        "Type": "Quả chín",
        "Name": "Hồng xiêm",
        "Unit": "100g",
        "Calo": 48.3,
        "Protein": 0.5,
        "Fat": 0.7,
        "Carb": 10
    },
    {
        "STT": 315,
        "Type": "Quả chín",
        "Name": "Lê",
        "Unit": "100g",
        "Calo": 45.4,
        "Protein": 0.7,
        "Fat": 0.2,
        "Carb": 10.2
    },
    {
        "STT": 316,
        "Type": "Quả chín",
        "Name": "Mận",
        "Unit": "100g",
        "Calo": 19.8,
        "Protein": 0.6,
        "Fat": 0.2,
        "Carb": 3.9
    },
    {
        "STT": 317,
        "Type": "Quả chín",
        "Name": "Mít dai",
        "Unit": "100g",
        "Calo": 48,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 11.4
    },
    {
        "STT": 318,
        "Type": "Quả chín",
        "Name": "Mít mật",
        "Unit": "100g",
        "Calo": 62,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 14
    },
    {
        "STT": 319,
        "Type": "Quả chín",
        "Name": "Mơ",
        "Unit": "100g",
        "Calo": 45.6,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 10.5
    },
    {
        "STT": 320,
        "Type": "Quả chín",
        "Name": "Na",
        "Unit": "100g",
        "Calo": 64.4,
        "Protein": 1.6,
        "Fat": 0,
        "Carb": 14.5
    },
    {
        "STT": 321,
        "Type": "Quả chín",
        "Name": "Nhãn",
        "Unit": "100g",
        "Calo": 47.6,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 11
    },
    {
        "STT": 322,
        "Type": "Quả chín",
        "Name": "Nho ta (nho chua)",
        "Unit": "100g",
        "Calo": 14,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 3.1
    },
    {
        "STT": 323,
        "Type": "Quả chín",
        "Name": "Quýt",
        "Unit": "100g",
        "Calo": 37.6,
        "Protein": 0.8,
        "Fat": 0,
        "Carb": 8.6
    },
    {
        "STT": 324,
        "Type": "Quả chín",
        "Name": "Táo ta",
        "Unit": "100g",
        "Calo": 37.2,
        "Protein": 0.8,
        "Fat": 0,
        "Carb": 8.5
    },
    {
        "STT": 325,
        "Type": "Quả chín",
        "Name": "Táo tây",
        "Unit": "100g",
        "Calo": 47.2,
        "Protein": 0.5,
        "Fat": 0,
        "Carb": 11.3
    },
    {
        "STT": 326,
        "Type": "Quả chín",
        "Name": "Vải",
        "Unit": "100g",
        "Calo": 42.8,
        "Protein": 0.7,
        "Fat": 0,
        "Carb": 10
    },
    {
        "STT": 327,
        "Type": "Quả chín",
        "Name": "Vú sữa",
        "Unit": "100g",
        "Calo": 41.6,
        "Protein": 1,
        "Fat": 0,
        "Carb": 9.4
    },
    {
        "STT": 328,
        "Type": "Quả chín",
        "Name": "Xoài chín",
        "Unit": "100g",
        "Calo": 68.7,
        "Protein": 0.6,
        "Fat": 0.3,
        "Carb": 15.9
    },
    {
        "STT": 329,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Bầu",
        "Unit": "100g",
        "Calo": 14,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 2.9
    },
    {
        "STT": 330,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Bí đao (bí xanh)",
        "Unit": "100g",
        "Calo": 12,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 2.4
    },
    {
        "STT": 331,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Bí ngô",
        "Unit": "100g",
        "Calo": 23.6,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 5.6
    },
    {
        "STT": 332,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cà chua",
        "Unit": "100g",
        "Calo": 19.2,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 4.2
    },
    {
        "STT": 333,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cà pháo",
        "Unit": "100g",
        "Calo": 20.4,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 3.6
    },
    {
        "STT": 334,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cà rốt",
        "Unit": "100g",
        "Calo": 38,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 8
    },
    {
        "STT": 335,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cà tím",
        "Unit": "100g",
        "Calo": 22,
        "Protein": 1,
        "Fat": 0,
        "Carb": 4.5
    },
    {
        "STT": 336,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cải bắp",
        "Unit": "100g",
        "Calo": 28.8,
        "Protein": 1.8,
        "Fat": 0,
        "Carb": 5.4
    },
    {
        "STT": 337,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cải cúc",
        "Unit": "100g",
        "Calo": 14,
        "Protein": 1.6,
        "Fat": 0,
        "Carb": 1.9
    },
    {
        "STT": 338,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cải thìa (cải trắng)",
        "Unit": "100g",
        "Calo": 16,
        "Protein": 1.4,
        "Fat": 0,
        "Carb": 2.6
    },
    {
        "STT": 339,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cải xanh",
        "Unit": "100g",
        "Calo": 15.2,
        "Protein": 1.7,
        "Fat": 0,
        "Carb": 2.1
    },
    {
        "STT": 340,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Cần ta",
        "Unit": "100g",
        "Calo": 10,
        "Protein": 1,
        "Fat": 0,
        "Carb": 1.5
    },
    {
        "STT": 341,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Củ cải trắng",
        "Unit": "100g",
        "Calo": 20.8,
        "Protein": 1.5,
        "Fat": 0,
        "Carb": 3.7
    },
    {
        "STT": 342,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Đậu cô ve",
        "Unit": "100g",
        "Calo": 73,
        "Protein": 5,
        "Fat": 1,
        "Carb": 11
    },
    {
        "STT": 343,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Dọc mùng",
        "Unit": "100g",
        "Calo": 4.8,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 0.8
    },
    {
        "STT": 344,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Dưa cải bắp",
        "Unit": "100g",
        "Calo": 18,
        "Protein": 1.2,
        "Fat": 0,
        "Carb": 3.3
    },
    {
        "STT": 345,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Dưa cải bẹ",
        "Unit": "100g",
        "Calo": 16.8,
        "Protein": 1.8,
        "Fat": 0,
        "Carb": 2.4
    },
    {
        "STT": 346,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Dưa chuột",
        "Unit": "100g",
        "Calo": 15.2,
        "Protein": 0.8,
        "Fat": 0,
        "Carb": 3
    },
    {
        "STT": 347,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Gấc",
        "Unit": "100g",
        "Calo": 122,
        "Protein": 20,
        "Fat": 0,
        "Carb": 10.5
    },
    {
        "STT": 348,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Giá đậu xanh",
        "Unit": "100g",
        "Calo": 43.2,
        "Protein": 5.5,
        "Fat": 0,
        "Carb": 5.3
    },
    {
        "STT": 349,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Hành lá (hành hoa)",
        "Unit": "100g",
        "Calo": 22.4,
        "Protein": 1.3,
        "Fat": 0,
        "Carb": 4.3
    },
    {
        "STT": 350,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Măng chua",
        "Unit": "100g",
        "Calo": 11.2,
        "Protein": 1.4,
        "Fat": 0,
        "Carb": 1.4
    },
    {
        "STT": 351,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Mộc nhĩ",
        "Unit": "100g",
        "Calo": 304.2,
        "Protein": 10.6,
        "Fat": 0.2,
        "Carb": 65
    },
    {
        "STT": 352,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Mướp",
        "Unit": "100g",
        "Calo": 15.6,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 3
    },
    {
        "STT": 353,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Nấm hương khô",
        "Unit": "100g",
        "Calo": 274.5,
        "Protein": 35,
        "Fat": 4.5,
        "Carb": 23.5
    },
    {
        "STT": 354,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Ớt vàng to",
        "Unit": "100g",
        "Calo": 28,
        "Protein": 1.3,
        "Fat": 0,
        "Carb": 5.7
    },
    {
        "STT": 355,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Ran kinh giới",
        "Unit": "100g",
        "Calo": 22,
        "Protein": 2.7,
        "Fat": 0,
        "Carb": 2.8
    },
    {
        "STT": 356,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau bí",
        "Unit": "100g",
        "Calo": 17.6,
        "Protein": 2.7,
        "Fat": 0,
        "Carb": 1.7
    },
    {
        "STT": 357,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau đay",
        "Unit": "100g",
        "Calo": 24,
        "Protein": 2.8,
        "Fat": 0,
        "Carb": 3.2
    },
    {
        "STT": 358,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau khoai lang",
        "Unit": "100g",
        "Calo": 21.6,
        "Protein": 2.6,
        "Fat": 0,
        "Carb": 2.8
    },
    {
        "STT": 359,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau mồng tơi",
        "Unit": "100g",
        "Calo": 13.6,
        "Protein": 2,
        "Fat": 0,
        "Carb": 1.4
    },
    {
        "STT": 360,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau mùi",
        "Unit": "100g",
        "Calo": 13.2,
        "Protein": 2.6,
        "Fat": 0,
        "Carb": 0.7
    },
    {
        "STT": 361,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau muống",
        "Unit": "100g",
        "Calo": 22.8,
        "Protein": 3.2,
        "Fat": 0,
        "Carb": 2.5
    },
    {
        "STT": 362,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau ngót",
        "Unit": "100g",
        "Calo": 34.8,
        "Protein": 5.3,
        "Fat": 0,
        "Carb": 3.4
    },
    {
        "STT": 363,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau răm",
        "Unit": "100g",
        "Calo": 30,
        "Protein": 4.7,
        "Fat": 0,
        "Carb": 2.8
    },
    {
        "STT": 364,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau rút",
        "Unit": "100g",
        "Calo": 27.6,
        "Protein": 5.1,
        "Fat": 0,
        "Carb": 1.8
    },
    {
        "STT": 365,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Rau thơm",
        "Unit": "100g",
        "Calo": 17.6,
        "Protein": 2,
        "Fat": 0,
        "Carb": 2.4
    },
    {
        "STT": 366,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Su hào",
        "Unit": "100g",
        "Calo": 36.4,
        "Protein": 2.8,
        "Fat": 0,
        "Carb": 6.3
    },
    {
        "STT": 367,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Su su",
        "Unit": "100g",
        "Calo": 18,
        "Protein": 0.8,
        "Fat": 0,
        "Carb": 3.7
    },
    {
        "STT": 368,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Súp lơ",
        "Unit": "100g",
        "Calo": 29.6,
        "Protein": 2.5,
        "Fat": 0,
        "Carb": 4.9
    },
    {
        "STT": 369,
        "Type": "Rau và củ quả dùng làm rau",
        "Name": "Tía tô",
        "Unit": "100g",
        "Calo": 25.2,
        "Protein": 2.9,
        "Fat": 0,
        "Carb": 3.4
    },
    {
        "STT": 370,
        "Type": "Sữa",
        "Name": "Sữa bò tươi",
        "Unit": "100g",
        "Calo": 74.4,
        "Protein": 3.9,
        "Fat": 4.4,
        "Carb": 4.8
    },
    {
        "STT": 371,
        "Type": "Sữa",
        "Name": "Sữa bột tách béo",
        "Unit": "100g",
        "Calo": 357,
        "Protein": 35,
        "Fat": 1,
        "Carb": 52
    },
    {
        "STT": 372,
        "Type": "Sữa",
        "Name": "Sữa bột toàn phần",
        "Unit": "100g",
        "Calo": 494,
        "Protein": 27,
        "Fat": 26,
        "Carb": 38
    },
    {
        "STT": 373,
        "Type": "Sữa",
        "Name": "Sữa chua",
        "Unit": "100g",
        "Calo": 60.9,
        "Protein": 3.3,
        "Fat": 3.7,
        "Carb": 3.6
    },
    {
        "STT": 374,
        "Type": "Sữa",
        "Name": "Sữa đặc có đường",
        "Unit": "100g",
        "Calo": 335.6,
        "Protein": 8.1,
        "Fat": 8.8,
        "Carb": 56
    },
    {
        "STT": 375,
        "Type": "Sữa",
        "Name": "Sữa mẹ",
        "Unit": "100g",
        "Calo": 61,
        "Protein": 1.5,
        "Fat": 3,
        "Carb": 7
    },
    {
        "STT": 376,
        "Type": "Thịt",
        "Name": "Ba tê",
        "Unit": "100g",
        "Calo": 326.2,
        "Protein": 10.8,
        "Fat": 24.6,
        "Carb": 15.4
    },
    {
        "STT": 377,
        "Type": "Thịt",
        "Name": "Bao tử bò",
        "Unit": "100g",
        "Calo": 97,
        "Protein": 14.8,
        "Fat": 4.2,
        "Carb": 0
    },
    {
        "STT": 378,
        "Type": "Thịt",
        "Name": "Bao tử heo",
        "Unit": "100g",
        "Calo": 84.5,
        "Protein": 14.6,
        "Fat": 2.9,
        "Carb": 0
    },
    {
        "STT": 379,
        "Type": "Thịt",
        "Name": "Cật bò",
        "Unit": "100g",
        "Calo": 67.4,
        "Protein": 12.5,
        "Fat": 1.8,
        "Carb": 0.3
    },
    {
        "STT": 380,
        "Type": "Thịt",
        "Name": "Cật heo",
        "Unit": "100g",
        "Calo": 81.1,
        "Protein": 13,
        "Fat": 3.1,
        "Carb": 0.3
    },
    {
        "STT": 381,
        "Type": "Thịt",
        "Name": "Chả bò",
        "Unit": "100g",
        "Calo": 356.7,
        "Protein": 13.8,
        "Fat": 33.5,
        "Carb": 0
    },
    {
        "STT": 382,
        "Type": "Thịt",
        "Name": "Chà bông",
        "Unit": "100g",
        "Calo": 395.6,
        "Protein": 53,
        "Fat": 20.4,
        "Carb": 0
    },
    {
        "STT": 383,
        "Type": "Thịt",
        "Name": "Chả lợn",
        "Unit": "100g",
        "Calo": 517.2,
        "Protein": 10.8,
        "Fat": 50.4,
        "Carb": 5.1
    },
    {
        "STT": 384,
        "Type": "Thịt",
        "Name": "Chả lụa",
        "Unit": "100g",
        "Calo": 135.5,
        "Protein": 21.5,
        "Fat": 5.5,
        "Carb": 0
    },
    {
        "STT": 385,
        "Type": "Thịt",
        "Name": "Chả quế",
        "Unit": "100g",
        "Calo": 415.8,
        "Protein": 16.2,
        "Fat": 39,
        "Carb": 0
    },
    {
        "STT": 386,
        "Type": "Thịt",
        "Name": "Chân giò lợn (bỏ xương)",
        "Unit": "100g",
        "Calo": 230.2,
        "Protein": 15.7,
        "Fat": 18.6,
        "Carb": 0
    },
    {
        "STT": 387,
        "Type": "Thịt",
        "Name": "Da heo",
        "Unit": "100g",
        "Calo": 117.5,
        "Protein": 23.3,
        "Fat": 2.7,
        "Carb": 0
    },
    {
        "STT": 388,
        "Type": "Thịt",
        "Name": "Dăm bông heo",
        "Unit": "100g",
        "Calo": 318.2,
        "Protein": 23,
        "Fat": 25,
        "Carb": 0.3
    },
    {
        "STT": 389,
        "Type": "Thịt",
        "Name": "Đầu heo",
        "Unit": "100g",
        "Calo": 335.3,
        "Protein": 13.4,
        "Fat": 31.3,
        "Carb": 0
    },
    {
        "STT": 390,
        "Type": "Thịt",
        "Name": "Đuôi bò",
        "Unit": "100g",
        "Calo": 137.3,
        "Protein": 19.7,
        "Fat": 6.5,
        "Carb": 0
    },
    {
        "STT": 391,
        "Type": "Thịt",
        "Name": "Đuôi heo",
        "Unit": "100g",
        "Calo": 467.1,
        "Protein": 10.8,
        "Fat": 47.1,
        "Carb": 0
    },
    {
        "STT": 392,
        "Type": "Thịt",
        "Name": "Ếch",
        "Unit": "100g",
        "Calo": 89.9,
        "Protein": 20,
        "Fat": 1.1,
        "Carb": 0
    },
    {
        "STT": 393,
        "Type": "Thịt",
        "Name": "Gan bò",
        "Unit": "100g",
        "Calo": 109.5,
        "Protein": 17.4,
        "Fat": 3.1,
        "Carb": 3
    },
    {
        "STT": 394,
        "Type": "Thịt",
        "Name": "Gân chân bò",
        "Unit": "100g",
        "Calo": 123.5,
        "Protein": 30.2,
        "Fat": 0.3,
        "Carb": 0
    },
    {
        "STT": 395,
        "Type": "Thịt",
        "Name": "Gan gà",
        "Unit": "100g",
        "Calo": 111.4,
        "Protein": 18.2,
        "Fat": 3.4,
        "Carb": 2
    },
    {
        "STT": 396,
        "Type": "Thịt",
        "Name": "Gan heo",
        "Unit": "100g",
        "Calo": 115.6,
        "Protein": 18.8,
        "Fat": 3.6,
        "Carb": 2
    },
    {
        "STT": 397,
        "Type": "Thịt",
        "Name": "Gan vịt",
        "Unit": "100g",
        "Calo": 121.9,
        "Protein": 17.1,
        "Fat": 4.7,
        "Carb": 2.8
    },
    {
        "STT": 398,
        "Type": "Thịt",
        "Name": "Giò bò",
        "Unit": "100g",
        "Calo": 356.7,
        "Protein": 13.8,
        "Fat": 33.5,
        "Carb": 0
    },
    {
        "STT": 399,
        "Type": "Thịt",
        "Name": "Giò lụa",
        "Unit": "100g",
        "Calo": 135.5,
        "Protein": 21.5,
        "Fat": 5.5,
        "Carb": 0
    },
    {
        "STT": 400,
        "Type": "Thịt",
        "Name": "Giò thủ",
        "Unit": "100g",
        "Calo": 552.7,
        "Protein": 16,
        "Fat": 54.3,
        "Carb": 0
    },
    {
        "STT": 401,
        "Type": "Thịt",
        "Name": "Huyết bò",
        "Unit": "100g",
        "Calo": 75.4,
        "Protein": 18,
        "Fat": 0.2,
        "Carb": 0.4
    },
    {
        "STT": 402,
        "Type": "Thịt",
        "Name": "Huyết heo luộc",
        "Unit": "100g",
        "Calo": 43.7,
        "Protein": 10.7,
        "Fat": 0.1,
        "Carb": 0
    },
    {
        "STT": 403,
        "Type": "Thịt",
        "Name": "Huyết heo sống",
        "Unit": "100g",
        "Calo": 24.5,
        "Protein": 5.7,
        "Fat": 0.1,
        "Carb": 0.2
    },
    {
        "STT": 404,
        "Type": "Thịt",
        "Name": "Lạp xưởng",
        "Unit": "100g",
        "Calo": 585,
        "Protein": 20.8,
        "Fat": 55,
        "Carb": 1.7
    },
    {
        "STT": 405,
        "Type": "Thịt",
        "Name": "Lòng heo (ruột già)",
        "Unit": "100g",
        "Calo": 166.7,
        "Protein": 6.9,
        "Fat": 15.1,
        "Carb": 0.8
    },
    {
        "STT": 406,
        "Type": "Thịt",
        "Name": "Lưỡi bò",
        "Unit": "100g",
        "Calo": 164.1,
        "Protein": 13.6,
        "Fat": 12.1,
        "Carb": 0.2
    },
    {
        "STT": 407,
        "Type": "Thịt",
        "Name": "Lưỡi heo",
        "Unit": "100g",
        "Calo": 177.6,
        "Protein": 14.2,
        "Fat": 12.8,
        "Carb": 1.4
    },
    {
        "STT": 408,
        "Type": "Thịt",
        "Name": "Mề gà",
        "Unit": "100g",
        "Calo": 99.3,
        "Protein": 21.3,
        "Fat": 1.3,
        "Carb": 0.6
    },
    {
        "STT": 409,
        "Type": "Thịt",
        "Name": "Nem chua",
        "Unit": "100g",
        "Calo": 137.3,
        "Protein": 21.7,
        "Fat": 3.7,
        "Carb": 4.3
    },
    {
        "STT": 410,
        "Type": "Thịt",
        "Name": "Nhộng",
        "Unit": "100g",
        "Calo": 110.5,
        "Protein": 13,
        "Fat": 6.5,
        "Carb": 0
    },
    {
        "STT": 411,
        "Type": "Thịt",
        "Name": "Óc bò",
        "Unit": "100g",
        "Calo": 123.5,
        "Protein": 9,
        "Fat": 9.5,
        "Carb": 0.5
    },
    {
        "STT": 412,
        "Type": "Thịt",
        "Name": "Óc heo",
        "Unit": "100g",
        "Calo": 123.1,
        "Protein": 9,
        "Fat": 9.5,
        "Carb": 0.4
    },
    {
        "STT": 413,
        "Type": "Thịt",
        "Name": "Patê",
        "Unit": "100g",
        "Calo": 326.2,
        "Protein": 10.8,
        "Fat": 24.6,
        "Carb": 15.4
    },
    {
        "STT": 414,
        "Type": "Thịt",
        "Name": "Phèo heo",
        "Unit": "100g",
        "Calo": 43.7,
        "Protein": 7.2,
        "Fat": 1.3,
        "Carb": 0.8
    },
    {
        "STT": 415,
        "Type": "Thịt",
        "Name": "Sườn heo bỏ xương",
        "Unit": "100g",
        "Calo": 186.8,
        "Protein": 17.9,
        "Fat": 12.8,
        "Carb": 0
    },
    {
        "STT": 416,
        "Type": "Thịt",
        "Name": "Tai heo",
        "Unit": "100g",
        "Calo": 120.9,
        "Protein": 21,
        "Fat": 4.1,
        "Carb": 0
    },
    {
        "STT": 417,
        "Type": "Thịt",
        "Name": "Thịt bê nạc",
        "Unit": "100g",
        "Calo": 84.5,
        "Protein": 20,
        "Fat": 0.5,
        "Carb": 0
    },
    {
        "STT": 418,
        "Type": "Thịt",
        "Name": "Thịt bò",
        "Unit": "100g",
        "Calo": 118.2,
        "Protein": 21,
        "Fat": 3.8,
        "Carb": 0
    },
    {
        "STT": 419,
        "Type": "Thịt",
        "Name": "Thịt bò khô",
        "Unit": "100g",
        "Calo": 239.2,
        "Protein": 51,
        "Fat": 1.6,
        "Carb": 5.2
    },
    {
        "STT": 420,
        "Type": "Thịt",
        "Name": "Thịt dê nạc",
        "Unit": "100g",
        "Calo": 121.5,
        "Protein": 20.7,
        "Fat": 4.3,
        "Carb": 0
    },
    {
        "STT": 421,
        "Type": "Thịt",
        "Name": "Thịt gà ta",
        "Unit": "100g",
        "Calo": 199.1,
        "Protein": 20.3,
        "Fat": 13.1,
        "Carb": 0
    },
    {
        "STT": 422,
        "Type": "Thịt",
        "Name": "Thịt gà tây",
        "Unit": "100g",
        "Calo": 218.1,
        "Protein": 20.1,
        "Fat": 15.3,
        "Carb": 0
    },
    {
        "STT": 423,
        "Type": "Thịt",
        "Name": "Thịt heo ba chỉ",
        "Unit": "100g",
        "Calo": 259.5,
        "Protein": 16.5,
        "Fat": 21.5,
        "Carb": 0
    },
    {
        "STT": 424,
        "Type": "Thịt",
        "Name": "Thịt heo mỡ",
        "Unit": "100g",
        "Calo": 393.7,
        "Protein": 14.5,
        "Fat": 37.3,
        "Carb": 0
    },
    {
        "STT": 425,
        "Type": "Thịt",
        "Name": "Thịt heo nạc",
        "Unit": "100g",
        "Calo": 139,
        "Protein": 19,
        "Fat": 7,
        "Carb": 0
    },
    {
        "STT": 426,
        "Type": "Thịt",
        "Name": "Thịt lơn nạc",
        "Unit": "100g",
        "Calo": 139,
        "Protein": 19,
        "Fat": 7,
        "Carb": 0
    },
    {
        "STT": 427,
        "Type": "Thịt",
        "Name": "Thịt mông chó",
        "Unit": "100g",
        "Calo": 337.6,
        "Protein": 16,
        "Fat": 30.4,
        "Carb": 0
    },
    {
        "STT": 428,
        "Type": "Thịt",
        "Name": "Thịt ngỗng",
        "Unit": "100g",
        "Calo": 408.8,
        "Protein": 14,
        "Fat": 39.2,
        "Carb": 0
    },
    {
        "STT": 429,
        "Type": "Thịt",
        "Name": "Thịt thỏ",
        "Unit": "100g",
        "Calo": 158,
        "Protein": 21.5,
        "Fat": 8,
        "Carb": 0
    },
    {
        "STT": 430,
        "Type": "Thịt",
        "Name": "Thịt ức gà",
        "Unit": "100g",
        "Calo": 103.2,
        "Protein": 23.1,
        "Fat": 1.2,
        "Carb": 0
    },
    {
        "STT": 431,
        "Type": "Thịt",
        "Name": "Thịt vai chó",
        "Unit": "100g",
        "Calo": 230.4,
        "Protein": 18,
        "Fat": 17.6,
        "Carb": 0
    },
    {
        "STT": 432,
        "Type": "Thịt",
        "Name": "Thịt vịt",
        "Unit": "100g",
        "Calo": 267.4,
        "Protein": 17.8,
        "Fat": 21.8,
        "Carb": 0
    },
    {
        "STT": 433,
        "Type": "Thịt",
        "Name": "Tim bò",
        "Unit": "100g",
        "Calo": 89.4,
        "Protein": 15,
        "Fat": 3,
        "Carb": 0.6
    },
    {
        "STT": 434,
        "Type": "Thịt",
        "Name": "Tim gà",
        "Unit": "100g",
        "Calo": 113.5,
        "Protein": 16,
        "Fat": 5.5,
        "Carb": 0
    },
    {
        "STT": 435,
        "Type": "Thịt",
        "Name": "Tim heo",
        "Unit": "100g",
        "Calo": 89.2,
        "Protein": 15.1,
        "Fat": 3.2,
        "Carb": 0
    },
    {
        "STT": 436,
        "Type": "Thịt",
        "Name": "Xúc xích",
        "Unit": "100g",
        "Calo": 535.4,
        "Protein": 27.2,
        "Fat": 47.4,
        "Carb": 0
    },
    {
        "STT": 437,
        "Type": "Thủy hải sản",
        "Name": "Ba khía muối",
        "Unit": "100g",
        "Calo": 82.9,
        "Protein": 14.2,
        "Fat": 2.9,
        "Carb": 0
    },
    {
        "STT": 438,
        "Type": "Thủy hải sản",
        "Name": "Bánh phồng tôm",
        "Unit": "100g",
        "Calo": 675.6,
        "Protein": 1.6,
        "Fat": 59.2,
        "Carb": 34.1
    },
    {
        "STT": 439,
        "Type": "Thủy hải sản",
        "Name": "Cá bống",
        "Unit": "100g",
        "Calo": 70.4,
        "Protein": 15.8,
        "Fat": 0.8,
        "Carb": 0
    },
    {
        "STT": 440,
        "Type": "Thủy hải sản",
        "Name": "Cá chép",
        "Unit": "100g",
        "Calo": 96.4,
        "Protein": 16,
        "Fat": 3.6,
        "Carb": 0
    },
    {
        "STT": 441,
        "Type": "Thủy hải sản",
        "Name": "Cá đối",
        "Unit": "100g",
        "Calo": 107.7,
        "Protein": 19.5,
        "Fat": 3.3,
        "Carb": 0
    },
    {
        "STT": 442,
        "Type": "Thủy hải sản",
        "Name": "Cá giếc",
        "Unit": "100g",
        "Calo": 87,
        "Protein": 17.7,
        "Fat": 1.8,
        "Carb": 0
    },
    {
        "STT": 443,
        "Type": "Thủy hải sản",
        "Name": "Cá hồi",
        "Unit": "100g",
        "Calo": 135.7,
        "Protein": 22,
        "Fat": 5.3,
        "Carb": 0
    },
    {
        "STT": 444,
        "Type": "Thủy hải sản",
        "Name": "Cá khô",
        "Unit": "100g",
        "Calo": 208.3,
        "Protein": 43.3,
        "Fat": 3.9,
        "Carb": 0
    },
    {
        "STT": 445,
        "Type": "Thủy hải sản",
        "Name": "Cá lóc",
        "Unit": "100g",
        "Calo": 97.1,
        "Protein": 18.2,
        "Fat": 2.7,
        "Carb": 0
    },
    {
        "STT": 446,
        "Type": "Thủy hải sản",
        "Name": "Cá mè",
        "Unit": "100g",
        "Calo": 143.5,
        "Protein": 15.4,
        "Fat": 9.1,
        "Carb": 0
    },
    {
        "STT": 447,
        "Type": "Thủy hải sản",
        "Name": "Cá mỡ",
        "Unit": "100g",
        "Calo": 150.9,
        "Protein": 16.8,
        "Fat": 9.3,
        "Carb": 0
    },
    {
        "STT": 448,
        "Type": "Thủy hải sản",
        "Name": "Cá mòi",
        "Unit": "100g",
        "Calo": 124,
        "Protein": 17.5,
        "Fat": 6,
        "Carb": 0
    },
    {
        "STT": 449,
        "Type": "Thủy hải sản",
        "Name": "Cá nạc",
        "Unit": "100g",
        "Calo": 79.9,
        "Protein": 17.5,
        "Fat": 1.1,
        "Carb": 0
    },
    {
        "STT": 450,
        "Type": "Thủy hải sản",
        "Name": "Cá ngừ",
        "Unit": "100g",
        "Calo": 86.7,
        "Protein": 21,
        "Fat": 0.3,
        "Carb": 0
    },
    {
        "STT": 451,
        "Type": "Thủy hải sản",
        "Name": "Cá nục",
        "Unit": "100g",
        "Calo": 110.5,
        "Protein": 20.2,
        "Fat": 3.3,
        "Carb": 0
    },
    {
        "STT": 452,
        "Type": "Thủy hải sản",
        "Name": "Cá phèn",
        "Unit": "100g",
        "Calo": 104.1,
        "Protein": 15.9,
        "Fat": 4.5,
        "Carb": 0
    },
    {
        "STT": 453,
        "Type": "Thủy hải sản",
        "Name": "Cá quả (cá lóc)",
        "Unit": "100g",
        "Calo": 97.1,
        "Protein": 18.2,
        "Fat": 2.7,
        "Carb": 0
    },
    {
        "STT": 454,
        "Type": "Thủy hải sản",
        "Name": "Cá rô đồng",
        "Unit": "100g",
        "Calo": 125.9,
        "Protein": 19.1,
        "Fat": 5.5,
        "Carb": 0
    },
    {
        "STT": 455,
        "Type": "Thủy hải sản",
        "Name": "Cá rô phi",
        "Unit": "100g",
        "Calo": 99.5,
        "Protein": 19.7,
        "Fat": 2.3,
        "Carb": 0
    },
    {
        "STT": 456,
        "Type": "Thủy hải sản",
        "Name": "Cá thu",
        "Unit": "100g",
        "Calo": 165.5,
        "Protein": 18.2,
        "Fat": 10.3,
        "Carb": 0
    },
    {
        "STT": 457,
        "Type": "Thủy hải sản",
        "Name": "Cá trắm cỏ",
        "Unit": "100g",
        "Calo": 91.4,
        "Protein": 17,
        "Fat": 2.6,
        "Carb": 0
    },
    {
        "STT": 458,
        "Type": "Thủy hải sản",
        "Name": "Cá trê",
        "Unit": "100g",
        "Calo": 173.1,
        "Protein": 16.5,
        "Fat": 11.9,
        "Carb": 0
    },
    {
        "STT": 459,
        "Type": "Thủy hải sản",
        "Name": "Cá trôi",
        "Unit": "100g",
        "Calo": 126.5,
        "Protein": 18.8,
        "Fat": 5.7,
        "Carb": 0
    },
    {
        "STT": 460,
        "Type": "Thủy hải sản",
        "Name": "Chà bông cá lóc",
        "Unit": "100g",
        "Calo": 311.7,
        "Protein": 65.7,
        "Fat": 4.1,
        "Carb": 3
    },
    {
        "STT": 461,
        "Type": "Thủy hải sản",
        "Name": "Cua biển",
        "Unit": "100g",
        "Calo": 103.4,
        "Protein": 17.5,
        "Fat": 0.6,
        "Carb": 7
    },
    {
        "STT": 462,
        "Type": "Thủy hải sản",
        "Name": "Cua đồng",
        "Unit": "100g",
        "Calo": 86.9,
        "Protein": 12.3,
        "Fat": 3.3,
        "Carb": 2
    },
    {
        "STT": 463,
        "Type": "Thủy hải sản",
        "Name": "Ghẹ",
        "Unit": "100g",
        "Calo": 53.9,
        "Protein": 11.9,
        "Fat": 0.7,
        "Carb": 0
    },
    {
        "STT": 464,
        "Type": "Thủy hải sản",
        "Name": "Hải sâm",
        "Unit": "100g",
        "Calo": 89.5,
        "Protein": 21.5,
        "Fat": 0.3,
        "Carb": 0.2
    },
    {
        "STT": 465,
        "Type": "Thủy hải sản",
        "Name": "Hến",
        "Unit": "100g",
        "Calo": 44.7,
        "Protein": 4.5,
        "Fat": 0.7,
        "Carb": 5.1
    },
    {
        "STT": 466,
        "Type": "Thủy hải sản",
        "Name": "Lươn",
        "Unit": "100g",
        "Calo": 93.5,
        "Protein": 20,
        "Fat": 1.5,
        "Carb": 0
    },
    {
        "STT": 467,
        "Type": "Thủy hải sản",
        "Name": "Mực khô",
        "Unit": "100g",
        "Calo": 290.9,
        "Protein": 60.1,
        "Fat": 4.5,
        "Carb": 2.5
    },
    {
        "STT": 468,
        "Type": "Thủy hải sản",
        "Name": "Mực tươi",
        "Unit": "100g",
        "Calo": 73.3,
        "Protein": 16.3,
        "Fat": 0.9,
        "Carb": 0
    },
    {
        "STT": 469,
        "Type": "Thủy hải sản",
        "Name": "Ốc bươu",
        "Unit": "100g",
        "Calo": 83.9,
        "Protein": 11.1,
        "Fat": 0.7,
        "Carb": 8.3
    },
    {
        "STT": 470,
        "Type": "Thủy hải sản",
        "Name": "Ốc nhồi",
        "Unit": "100g",
        "Calo": 84.3,
        "Protein": 11.9,
        "Fat": 0.7,
        "Carb": 7.6
    },
    {
        "STT": 471,
        "Type": "Thủy hải sản",
        "Name": "Ốc vặn",
        "Unit": "100g",
        "Calo": 72.3,
        "Protein": 12.2,
        "Fat": 0.7,
        "Carb": 4.3
    },
    {
        "STT": 472,
        "Type": "Thủy hải sản",
        "Name": "Sò",
        "Unit": "100g",
        "Calo": 50.8,
        "Protein": 8.8,
        "Fat": 0.4,
        "Carb": 3
    },
    {
        "STT": 473,
        "Type": "Thủy hải sản",
        "Name": "Tép gạo",
        "Unit": "100g",
        "Calo": 57.6,
        "Protein": 11.7,
        "Fat": 1.2,
        "Carb": 0
    },
    {
        "STT": 474,
        "Type": "Thủy hải sản",
        "Name": "Tép khô",
        "Unit": "100g",
        "Calo": 269,
        "Protein": 59.8,
        "Fat": 3,
        "Carb": 0.7
    },
    {
        "STT": 475,
        "Type": "Thủy hải sản",
        "Name": "Tôm biển",
        "Unit": "100g",
        "Calo": 82.1,
        "Protein": 17.6,
        "Fat": 0.9,
        "Carb": 0.9
    },
    {
        "STT": 476,
        "Type": "Thủy hải sản",
        "Name": "Tôm đồng",
        "Unit": "100g",
        "Calo": 89.8,
        "Protein": 18.4,
        "Fat": 1.8,
        "Carb": 0
    },
    {
        "STT": 477,
        "Type": "Thủy hải sản",
        "Name": "Tôm khô",
        "Unit": "100g",
        "Calo": 346.6,
        "Protein": 75.6,
        "Fat": 3.8,
        "Carb": 2.5
    },
    {
        "STT": 478,
        "Type": "Thủy hải sản",
        "Name": "Trai",
        "Unit": "100g",
        "Calo": 38.3,
        "Protein": 4.6,
        "Fat": 1.1,
        "Carb": 2.5
    },
    {
        "STT": 479,
        "Type": "Trứng",
        "Name": "Hột vịt lộn",
        "Unit": "1 trái",
        "Calo": 98.3,
        "Protein": 7.3,
        "Fat": 6.7,
        "Carb": 2.2
    },
    {
        "STT": 480,
        "Type": "Trứng",
        "Name": "Lòng đỏ trứng gà",
        "Unit": "100g",
        "Calo": 326.6,
        "Protein": 13.6,
        "Fat": 29.8,
        "Carb": 1
    },
    {
        "STT": 481,
        "Type": "Trứng",
        "Name": "Lòng đỏ trứng vịt",
        "Unit": "100g",
        "Calo": 367.9,
        "Protein": 14.5,
        "Fat": 32.3,
        "Carb": 4.8
    },
    {
        "STT": 482,
        "Type": "Trứng",
        "Name": "Lòng trắng trứng gà",
        "Unit": "100g",
        "Calo": 46.1,
        "Protein": 10.3,
        "Fat": 0.1,
        "Carb": 1
    },
    {
        "STT": 483,
        "Type": "Trứng",
        "Name": "Lòng trắng trứng vịt",
        "Unit": "100g",
        "Calo": 50.1,
        "Protein": 11.5,
        "Fat": 0.1,
        "Carb": 0.8
    },
    {
        "STT": 484,
        "Type": "Trứng",
        "Name": "Trứng gà",
        "Unit": "100g",
        "Calo": 165.6,
        "Protein": 14.8,
        "Fat": 11.6,
        "Carb": 0.5
    },
    {
        "STT": 485,
        "Type": "Trứng",
        "Name": "Trứng vịt",
        "Unit": "100g",
        "Calo": 183.8,
        "Protein": 13,
        "Fat": 14.2,
        "Carb": 1
    },
    {
        "STT": 486,
        "Type": "Trứng",
        "Name": "Trứng vịt lộn",
        "Unit": "100g",
        "Calo": 182,
        "Protein": 13.6,
        "Fat": 12.4,
        "Carb": 4
    },
    {
        "STT": 487,
        "Type": "Xôi",
        "Name": "Xôi bắp",
        "Unit": "1 gói",
        "Calo": 312.7,
        "Protein": 8.2,
        "Fat": 8.3,
        "Carb": 51.3
    },
    {
        "STT": 488,
        "Type": "Xôi",
        "Name": "Xôi đậu đen",
        "Unit": "1 gói",
        "Calo": 551.9,
        "Protein": 17.4,
        "Fat": 11.1,
        "Carb": 95.6
    },
    {
        "STT": 489,
        "Type": "Xôi",
        "Name": "Xôi đậu phộng",
        "Unit": "1 gói",
        "Calo": 659.9,
        "Protein": 19.9,
        "Fat": 28.3,
        "Carb": 81.4
    },
    {
        "STT": 490,
        "Type": "Xôi",
        "Name": "Xôi đậu xanh",
        "Unit": "1 gói",
        "Calo": 533.6,
        "Protein": 15.4,
        "Fat": 11.2,
        "Carb": 92.8
    },
    {
        "STT": 491,
        "Type": "Xôi",
        "Name": "Xôi gấc",
        "Unit": "1 gói",
        "Calo": 582.2,
        "Protein": 12.1,
        "Fat": 13.8,
        "Carb": 102.4
    },
    {
        "STT": 492,
        "Type": "Xôi",
        "Name": "Xôi khúc",
        "Unit": "1 gói",
        "Calo": 396.1,
        "Protein": 10.4,
        "Fat": 10.5,
        "Carb": 65
    },
    {
        "STT": 493,
        "Type": "Xôi",
        "Name": "Xôi lá cẩm",
        "Unit": "1 gói",
        "Calo": 578.9,
        "Protein": 15,
        "Fat": 11.3,
        "Carb": 104.3
    },
    {
        "STT": 494,
        "Type": "Xôi",
        "Name": "Xôi mặn",
        "Unit": "1 gói",
        "Calo": 500.5,
        "Protein": 17.9,
        "Fat": 18.9,
        "Carb": 64.7
    },
    {
        "STT": 495,
        "Type": "Xôi",
        "Name": "Xôi nếp than",
        "Unit": "1 gói",
        "Calo": 516.2,
        "Protein": 13.5,
        "Fat": 11,
        "Carb": 90.8
    },
    {
        "STT": 496,
        "Type": "Xôi",
        "Name": "Xôi vị",
        "Unit": "1 gói",
        "Calo": 460.2,
        "Protein": 11.6,
        "Fat": 13,
        "Carb": 74.2
    },
    {
        "STT": 497,
        "Type": "Xôi",
        "Name": "Xôi vò",
        "Unit": "1 gói",
        "Calo": 510.1,
        "Protein": 14.8,
        "Fat": 6.9,
        "Carb": 97.2
    },
    {
        "STT": 498,
        "Type": "Đồ ngọt",
        "Name": "Kem Cornetto",
        "Unit": "1 cây",
        "Calo": 201.9,
        "Protein": 3.3,
        "Fat": 10.3,
        "Carb": 24
    },
    {
        "STT": 499,
        "Type": "Đồ ngọt",
        "Name": "Kem hộp",
        "Unit": "1 hộp 500ml",
        "Calo": 380.2,
        "Protein": 6,
        "Fat": 17,
        "Carb": 50.8
    },
    {
        "STT": 500,
        "Type": "Đồ uống",
        "Name": "Nước cam vắt",
        "Unit": "1 ly",
        "Calo": 226.4,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 55.7
    },
    {
        "STT": 501,
        "Type": "Đồ uống",
        "Name": "Nước chanh",
        "Unit": "1 ly",
        "Calo": 149.2,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 37.2
    },
    {
        "STT": 502,
        "Type": "Đồ uống",
        "Name": "Nước ép trái cây đóng hộp",
        "Unit": "1 ly",
        "Calo": 73.6,
        "Protein": 0,
        "Fat": 0,
        "Carb": 18.4
    },
    {
        "STT": 503,
        "Type": "Đồ uống",
        "Name": "Nước mía",
        "Unit": "1 ly",
        "Calo": 104,
        "Protein": 0,
        "Fat": 0,
        "Carb": 26
    },
    {
        "STT": 504,
        "Type": "Đồ uống",
        "Name": "Nước ngọt có gaz",
        "Unit": "1 lon",
        "Calo": 144.8,
        "Protein": 0,
        "Fat": 0,
        "Carb": 36.2
    },
    {
        "STT": 505,
        "Type": "Đồ uống",
        "Name": "Nước rau má",
        "Unit": "1 ly",
        "Calo": 74,
        "Protein": 2,
        "Fat": 0,
        "Carb": 16.5
    },
    {
        "STT": 506,
        "Type": "Đồ uống",
        "Name": "Nước sâm",
        "Unit": "1 ly",
        "Calo": 79.6,
        "Protein": 0,
        "Fat": 0,
        "Carb": 19.9
    },
    {
        "STT": 507,
        "Type": "Đồ uống",
        "Name": "Phô mai Bò cười",
        "Unit": "1 miếng nhỏ",
        "Calo": 67,
        "Protein": 4.6,
        "Fat": 5.4,
        "Carb": 0
    },
    {
        "STT": 508,
        "Type": "Đồ uống",
        "Name": "Sinh tố",
        "Unit": "1 ly",
        "Calo": 276.8,
        "Protein": 3.2,
        "Fat": 3.2,
        "Carb": 58.8
    },
    {
        "STT": 509,
        "Type": "Đồ uống",
        "Name": "Sữa chua uống YoMost",
        "Unit": "1 hộp nhỏ",
        "Calo": 140.3,
        "Protein": 2.8,
        "Fat": 1.9,
        "Carb": 28
    },
    {
        "STT": 510,
        "Type": "Đồ uống",
        "Name": "Sữa chua Yoghurt Vinamilk",
        "Unit": "1 hủ nhỏ",
        "Calo": 137.6,
        "Protein": 3.8,
        "Fat": 4,
        "Carb": 21.6
    },
    {
        "STT": 511,
        "Type": "Đồ uống",
        "Name": "Sữa đặc có đường",
        "Unit": "1 hộp nhỏ",
        "Calo": 88.4,
        "Protein": 2,
        "Fat": 2.4,
        "Carb": 14.7
    },
    {
        "STT": 512,
        "Type": "Đồ uống",
        "Name": "Sữa đậu nành Tribeco",
        "Unit": "1 hộp nhỏ",
        "Calo": 110.1,
        "Protein": 6,
        "Fat": 2.9,
        "Carb": 15
    },
    {
        "STT": 513,
        "Type": "Đồ uống",
        "Name": "Sữa hộp Cô gái Hà lan",
        "Unit": "1 hộp nhỏ",
        "Calo": 152.4,
        "Protein": 6.5,
        "Fat": 6,
        "Carb": 18.1
    },
    {
        "STT": 514,
        "Type": "Quả chín",
        "Name": "Thạch dừa",
        "Unit": "1 cái",
        "Calo": 17.2,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 3.9
    },
    {
        "STT": 515,
        "Type": "Quả chín",
        "Name": "Trái dừa tươi",
        "Unit": "1 trái",
        "Calo": 127.3,
        "Protein": 5.2,
        "Fat": 1.7,
        "Carb": 22.8
    },
    {
        "STT": 516,
        "Type": "Quả chín",
        "Name": "Vải đóng hộp",
        "Unit": "1 ly",
        "Calo": 130,
        "Protein": 0.9,
        "Fat": 0,
        "Carb": 31.6
    },
    {
        "STT": 517,
        "Type": "Quả chín",
        "Name": "Bơ",
        "Unit": "1 trái",
        "Calo": 184.7,
        "Protein": 3.5,
        "Fat": 17.1,
        "Carb": 4.2
    },
    {
        "STT": 518,
        "Type": "Quả chín",
        "Name": "Chuối cau",
        "Unit": "1 trái",
        "Calo": 36.2,
        "Protein": 0.5,
        "Fat": 0.2,
        "Carb": 8.1
    },
    {
        "STT": 519,
        "Type": "Quả chín",
        "Name": "Chuối sứ",
        "Unit": "1 trái",
        "Calo": 35,
        "Protein": 0.5,
        "Fat": 0.2,
        "Carb": 7.8
    },
    {
        "STT": 520,
        "Type": "Quả chín",
        "Name": "Thơm",
        "Unit": "1 miếng",
        "Calo": 17.6,
        "Protein": 0.5,
        "Fat": 0,
        "Carb": 3.9
    },
    {
        "STT": 521,
        "Type": "Quả chín",
        "Name": "Xoài",
        "Unit": "1 trái",
        "Calo": 178.4,
        "Protein": 1.6,
        "Fat": 0.8,
        "Carb": 41.2
    },
    {
        "STT": 522,
        "Type": "Quả chín",
        "Name": "Nhãn tiêu",
        "Unit": "1 trái",
        "Calo": 3.2,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 0.4
    },
    {
        "STT": 523,
        "Type": "Quả chín",
        "Name": "Nhãn thường",
        "Unit": "1 trái",
        "Calo": 4,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 0.9
    },
    {
        "STT": 524,
        "Type": "Quả chín",
        "Name": "Táo ta",
        "Unit": "1 trái",
        "Calo": 9.2,
        "Protein": 0.2,
        "Fat": 0,
        "Carb": 2.1
    },
    {
        "STT": 525,
        "Type": "Quả chín",
        "Name": "Mít tố nữ",
        "Unit": "1 múi",
        "Calo": 9.6,
        "Protein": 0.2,
        "Fat": 0,
        "Carb": 2.2
    },
    {
        "STT": 526,
        "Type": "Quả chín",
        "Name": "Mít nghệ",
        "Unit": "1 múi",
        "Calo": 11.2,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 2.5
    },
    {
        "STT": 527,
        "Type": "Quả chín",
        "Name": "Vải đóng hộp",
        "Unit": "1 trái",
        "Calo": 8.8,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 2.1
    },
    {
        "STT": 528,
        "Type": "Quả chín",
        "Name": "Chôm chôm",
        "Unit": "1 trái",
        "Calo": 14.4,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 3.3
    },
    {
        "STT": 529,
        "Type": "Quả chín",
        "Name": "Măng cụt",
        "Unit": "1 trái",
        "Calo": 14.4,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 3.5
    },
    {
        "STT": 530,
        "Type": "Quả chín",
        "Name": "Sầu riêng",
        "Unit": "100g",
        "Calo": 147,
        "Protein": 1.5,
        "Fat": 5.3,
        "Carb": 27.1
    },
    {
        "STT": 531,
        "Type": "Quả chín",
        "Name": "Chuối khô",
        "Unit": "1 trái",
        "Calo": 42.4,
        "Protein": 0.7,
        "Fat": 0,
        "Carb": 9.9
    },
    {
        "STT": 532,
        "Type": "Quả chín",
        "Name": "Hạt điều",
        "Unit": "1 đĩa",
        "Calo": 291.9,
        "Protein": 9.2,
        "Fat": 24.7,
        "Carb": 8.2
    },
    {
        "STT": 533,
        "Type": "Quả chín",
        "Name": "Quýt",
        "Unit": "1 trái",
        "Calo": 28,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 6.4
    },
    {
        "STT": 534,
        "Type": "Quả chín",
        "Name": "Nho khô",
        "Unit": "1 đĩa nhỏ",
        "Calo": 173.3,
        "Protein": 1.4,
        "Fat": 0.1,
        "Carb": 41.7
    },
    {
        "STT": 535,
        "Type": "Quả chín",
        "Name": "Cóc",
        "Unit": "1 trái",
        "Calo": 33.6,
        "Protein": 1,
        "Fat": 0,
        "Carb": 7.4
    },
    {
        "STT": 536,
        "Type": "Quả chín",
        "Name": "Nho Mỹ (đỏ/xanh)",
        "Unit": "100 gram",
        "Calo": 67.6,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 16.5
    },
    {
        "STT": 537,
        "Type": "Quả chín",
        "Name": "Khoai môn",
        "Unit": "1 củ",
        "Calo": 457.7,
        "Protein": 0.9,
        "Fat": 0.1,
        "Carb": 113.3
    },
    {
        "STT": 538,
        "Type": "Quả chín",
        "Name": "Chuối già",
        "Unit": "1 trái",
        "Calo": 73.8,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carb": 16.9
    },
    {
        "STT": 539,
        "Type": "Quả chín",
        "Name": "Dưa hấu",
        "Unit": "1 miếng",
        "Calo": 21.1,
        "Protein": 1.6,
        "Fat": 0.3,
        "Carb": 3
    },
    {
        "STT": 540,
        "Type": "Quả chín",
        "Name": "Mãng cầu ta",
        "Unit": "1 trái",
        "Calo": 56,
        "Protein": 1.4,
        "Fat": 0,
        "Carb": 12.6
    },
    {
        "STT": 541,
        "Type": "Quả chín",
        "Name": "Bưởi",
        "Unit": "1 múi",
        "Calo": 20.8,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 5.1
    },
    {
        "STT": 542,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai lang",
        "Unit": "1 củ",
        "Calo": 130.7,
        "Protein": 1.4,
        "Fat": 0.3,
        "Carb": 30.6
    },
    {
        "STT": 543,
        "Type": "Củ giàu tinh bột",
        "Name": "Bắp xào",
        "Unit": "1 đĩa",
        "Calo": 316.3,
        "Protein": 10.4,
        "Fat": 12.3,
        "Carb": 41
    },
    {
        "STT": 544,
        "Type": "Quả chín",
        "Name": "Lê",
        "Unit": "1 trái",
        "Calo": 91.6,
        "Protein": 1.4,
        "Fat": 0.4,
        "Carb": 20.6
    },
    {
        "STT": 545,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai từ",
        "Unit": "1 củ",
        "Calo": 98.4,
        "Protein": 1.6,
        "Fat": 0,
        "Carb": 23
    },
    {
        "STT": 546,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai mì",
        "Unit": "1 khúc",
        "Calo": 137,
        "Protein": 1,
        "Fat": 0.2,
        "Carb": 32.8
    },
    {
        "STT": 547,
        "Type": "Quả chín",
        "Name": "Táo tây",
        "Unit": "1 trái",
        "Calo": 107.6,
        "Protein": 1.1,
        "Fat": 0,
        "Carb": 25.8
    },
    {
        "STT": 548,
        "Type": "Củ giàu tinh bột",
        "Name": "Bắp luộc",
        "Unit": "1 trái",
        "Calo": 191.7,
        "Protein": 4.5,
        "Fat": 2.5,
        "Carb": 37.8
    },
    {
        "STT": 549,
        "Type": "Củ giàu tinh bột",
        "Name": "Bắp nướng",
        "Unit": "1 trái",
        "Calo": 271.6,
        "Protein": 4.8,
        "Fat": 7.6,
        "Carb": 46
    },
    {
        "STT": 550,
        "Type": "Quả chín",
        "Name": "Mãng cầu xiêm",
        "Unit": "1 miếng",
        "Calo": 40,
        "Protein": 1.4,
        "Fat": 0,
        "Carb": 8.6
    },
    {
        "STT": 551,
        "Type": "Quả chín",
        "Name": "Khế",
        "Unit": "1 trái",
        "Calo": 9.2,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 1.9
    },
    {
        "STT": 552,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai tây",
        "Unit": "1 đĩa nhỏ",
        "Calo": 131.7,
        "Protein": 0.6,
        "Fat": 8.9,
        "Carb": 12.3
    },
    {
        "STT": 553,
        "Type": "Củ giàu tinh bột",
        "Name": "Khoai lang chiên",
        "Unit": "100 gram",
        "Calo": 325,
        "Protein": 2.6,
        "Fat": 15.8,
        "Carb": 43.1
    },
    {
        "STT": 554,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu phộng nấu",
        "Unit": "1 lon",
        "Calo": 395.1,
        "Protein": 19,
        "Fat": 30.7,
        "Carb": 10.7
    },
    {
        "STT": 555,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Đậu phộng da cá",
        "Unit": "1 đĩa nhỏ",
        "Calo": 273.3,
        "Protein": 8.9,
        "Fat": 16.1,
        "Carb": 23.2
    },
    {
        "STT": 556,
        "Type": "Quả chín",
        "Name": "Đu đủ",
        "Unit": "1 miếng",
        "Calo": 125.2,
        "Protein": 3.6,
        "Fat": 0,
        "Carb": 27.7
    },
    {
        "STT": 557,
        "Type": "Quả chín",
        "Name": "Hồng đỏ",
        "Unit": "1 trái",
        "Calo": 24.8,
        "Protein": 0.6,
        "Fat": 0,
        "Carb": 5.6
    },
    {
        "STT": 558,
        "Type": "Quả chín",
        "Name": "Nho ta (tím)",
        "Unit": "100 gram",
        "Calo": 14,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 3.1
    },
    {
        "STT": 559,
        "Type": "Quả chín",
        "Name": "Sơ ri",
        "Unit": "100 gram",
        "Calo": 14,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 3.1
    },
    {
        "STT": 560,
        "Type": "Quả chín",
        "Name": "Đậu phộng rang",
        "Unit": "1 đĩa nhỏ",
        "Calo": 572.5,
        "Protein": 27.5,
        "Fat": 44.5,
        "Carb": 15.5
    },
    {
        "STT": 561,
        "Type": "Quả chín",
        "Name": "Đậu phộng chiên muối",
        "Unit": "1 đĩa nhỏ",
        "Calo": 617.5,
        "Protein": 27.5,
        "Fat": 49.5,
        "Carb": 15.5
    },
    {
        "STT": 562,
        "Type": "Quả chín",
        "Name": "Cam",
        "Unit": "1 trái",
        "Calo": 68.8,
        "Protein": 1.7,
        "Fat": 0,
        "Carb": 15.5
    },
    {
        "STT": 563,
        "Type": "Quả chín",
        "Name": "Chuối sấy",
        "Unit": "1 đĩa nhỏ",
        "Calo": 253.5,
        "Protein": 1.8,
        "Fat": 10.7,
        "Carb": 37.5
    },
    {
        "STT": 564,
        "Type": "Quả chín",
        "Name": "Mít sấy",
        "Unit": "1 đĩa nhỏ",
        "Calo": 109.1,
        "Protein": 1.8,
        "Fat": 2.7,
        "Carb": 19.4
    },
    {
        "STT": 565,
        "Type": "Quả chín",
        "Name": "Vú sữa",
        "Unit": "1 trái",
        "Calo": 82,
        "Protein": 2,
        "Fat": 0,
        "Carb": 18.5
    },
    {
        "STT": 566,
        "Type": "Quả chín",
        "Name": "Ổi",
        "Unit": "1 trái",
        "Calo": 53.2,
        "Protein": 1,
        "Fat": 0,
        "Carb": 12.3
    },
    {
        "STT": 567,
        "Type": "Quả chín",
        "Name": "Thanh long",
        "Unit": "1 trái",
        "Calo": 225.2,
        "Protein": 7.3,
        "Fat": 0,
        "Carb": 49
    },
    {
        "STT": 568,
        "Type": "Quả chín",
        "Name": "Mận đỏ",
        "Unit": "1 trái",
        "Calo": 11.2,
        "Protein": 0.3,
        "Fat": 0,
        "Carb": 2.5
    },
    {
        "STT": 569,
        "Type": "Củ giàu tinh bột",
        "Name": "Củ sắn",
        "Unit": "1 củ",
        "Calo": 52,
        "Protein": 1.9,
        "Fat": 0,
        "Carb": 11.1
    },
    {
        "STT": 570,
        "Type": "Ngũ cốc",
        "Name": "Yến mạch (khô)",
        "Unit": "100g",
        "Calo": 389,
        "Protein": 16.9,
        "Fat": 6.9,
        "Carb": 66.3
    },
    {
        "STT": 571,
        "Type": "Ngũ cốc",
        "Name": "Gạo lứt",
        "Unit": "100g",
        "Calo": 362,
        "Protein": 7,
        "Fat": 2,
        "Carb": 78
    },
    {
        "STT": 572,
        "Type": "Ngũ cốc",
        "Name": "Cơm gạo lứt",
        "Unit": "100g",
        "Calo": 123,
        "Protein": 3,
        "Fat": 1,
        "Carb": 26
    },
    {
        "STT": 573,
        "Type": "Đồ ngọt",
        "Name": "Bánh tiramisu",
        "Unit": "100g",
        "Calo": 295,
        "Protein": 5,
        "Fat": 13,
        "Carb": 36
    },
    {
        "STT": 574,
        "Type": "Đồ uống",
        "Name": "Trà sữa trân châu",
        "Unit": "1 ly M",
        "Calo": 500,
        "Protein": 11,
        "Fat": 19,
        "Carb": 39
    },
    {
        "STT": 575,
        "Type": "Món mặn",
        "Name": "Chao (đậu hũ nhũ)",
        "Unit": "100g",
        "Calo": 116,
        "Protein": 8,
        "Fat": 8,
        "Carb": 5
    },
    {
        "STT": 576,
        "Type": "Món sợi",
        "Name": "Bánh canh chay",
        "Unit": "1 tô vừa",
        "Calo": 225,
        "Protein": 50,
        "Fat": 9,
        "Carb": 10
    },
    {
        "STT": 577,
        "Type": "Đồ ngọt",
        "Name": "Dừa khô",
        "Unit": "100g",
        "Calo": 650,
        "Protein": 7.5,
        "Fat": 65,
        "Carb": 25
    },
    {
        "STT": 578,
        "Type": "Món sợi",
        "Name": "Bún đậu mắm tôm",
        "Unit": "1 suất",
        "Calo": 760,
        "Protein": 58.3,
        "Fat": 44.5,
        "Carb": 48.9
    },
    {
        "STT": 579,
        "Type": "Món sợi",
        "Name": "Bánh hỏi (tươi)",
        "Unit": "100g",
        "Calo": 112,
        "Protein": 2.3,
        "Fat": 0.3,
        "Carb": 25
    },
    {
        "STT": 580,
        "Type": "Đồ ngọt",
        "Name": "Bánh dorayaki",
        "Unit": "1 cái",
        "Calo": 195,
        "Protein": 4.1,
        "Fat": 2.7,
        "Carb": 38.4
    },
    {
        "STT": 581,
        "Type": "Đồ ngọt",
        "Name": "Tào phớ nước đường",
        "Unit": "100g",
        "Calo": 38,
        "Protein": 2.6,
        "Fat": 1.1,
        "Carb": 4.5
    },
    {
        "STT": 582,
        "Type": "Đồ ngọt",
        "Name": "Tào phớ trân châu",
        "Unit": "100g",
        "Calo": 71,
        "Protein": 2.3,
        "Fat": 1.6,
        "Carb": 11.5
    },
    {
        "STT": 583,
        "Type": "Đồ ngọt",
        "Name": "Đường nâu",
        "Unit": "100g",
        "Calo": 380,
        "Protein": 0.1,
        "Fat": 0,
        "Carb": 98.1
    },
    {
        "STT": 584,
        "Type": "Cháo",
        "Name": "Cháo trắng",
        "Unit": "1 tô nhỡ (300g)",
        "Calo": 252,
        "Protein": 8.1,
        "Fat": 1.3,
        "Carb": 52
    },
    {
        "STT": 585,
        "Type": "Cháo",
        "Name": "Cháo sườn",
        "Unit": "1 tô nhỡ (300g)",
        "Calo": 328,
        "Protein": 12.9,
        "Fat": 6.9,
        "Carb": 50.7
    },
    {
        "STT": 586,
        "Type": "Thịt",
        "Name": "Khô gà",
        "Unit": "100g",
        "Calo": 101,
        "Protein": 33.4,
        "Fat": 4.9,
        "Carb": 4
    },
    {
        "STT": 587,
        "Type": "Thịt",
        "Name": "Nem chua rán",
        "Unit": "100g",
        "Calo": 227,
        "Protein": 21.7,
        "Fat": 13.7,
        "Carb": 4.3
    },
    {
        "STT": 588,
        "Type": "Đồ mặn",
        "Name": "Bánh tráng trộn",
        "Unit": "100g",
        "Calo": 300,
        "Protein": 5,
        "Fat": 16.3,
        "Carb": 32.5
    },
    {
        "STT": 589,
        "Type": "Đồ ngọt",
        "Name": "Trân châu",
        "Unit": "100g",
        "Calo": 347,
        "Protein": 9.5,
        "Fat": 0.2,
        "Carb": 55
    },
    {
        "STT": 590,
        "Type": "Cháo, phở, miến, mì ăn liền",
        "Name": "Mì tôm Hàn Quốc",
        "Unit": "1 gói (130g)",
        "Calo": 550,
        "Protein": 8,
        "Fat": 20,
        "Carb": 84
    },
    {
        "STT": 591,
        "Type": "Quả chín",
        "Name": "Roi",
        "Unit": "100g",
        "Calo": 16,
        "Protein": 0.4,
        "Fat": 0.3,
        "Carb": 3.2
    },
    {
        "STT": 592,
        "Type": "Đồ uống",
        "Name": "Sữa chua nếp cẩm Vinamilk",
        "Unit": "1 hũ",
        "Calo": 104.5,
        "Protein": 2.9,
        "Fat": 2.1,
        "Carb": 18.5
    },
    {
        "STT": 593,
        "Type": "Đồ uống",
        "Name": "Sữa chua nếp cẩm Ba Vì",
        "Unit": "1 hũ",
        "Calo": 90,
        "Protein": 2,
        "Fat": 1.6,
        "Carb": 17.5
    },
    {
        "STT": 594,
        "Type": "Đồ uống",
        "Name": "Trà đào (cam sả)",
        "Unit": "240ml",
        "Calo": 122,
        "Protein": 0.2,
        "Fat": 0.5,
        "Carb": 28.5
    },
    {
        "STT": 595,
        "Type": "Bánh việt",
        "Name": "Bánh quẩy đường",
        "Unit": "100g",
        "Calo": 290,
        "Protein": 6,
        "Fat": 5.3,
        "Carb": 47.5
    },
    {
        "STT": 596,
        "Type": "Gia vị, nước chấm",
        "Name": "Tương cà",
        "Unit": "10g",
        "Calo": 13,
        "Protein": 0,
        "Fat": 0,
        "Carb": 3.3
    },
    {
        "STT": 597,
        "Type": "Gia vị, nước chấm",
        "Name": "Tương ngô",
        "Unit": "100g",
        "Calo": 75,
        "Protein": 3.9,
        "Fat": 0.1,
        "Carb": 14.5
    },
    {
        "STT": 598,
        "Type": "Gia vị, nước chấm",
        "Name": "Tương nếp",
        "Unit": "100g",
        "Calo": 86,
        "Protein": 4.3,
        "Fat": 0.7,
        "Carb": 15.7
    },
    {
        "STT": 599,
        "Type": "Gia vị, nước chấm",
        "Name": "Sốt mayonaise",
        "Unit": "100g",
        "Calo": 701,
        "Protein": 0,
        "Fat": 77.8,
        "Carb": 0.1
    },
    {
        "STT": 600,
        "Type": "Gia vị, nước chấm",
        "Name": "Mắm tép chua",
        "Unit": "100g",
        "Calo": 68,
        "Protein": 8.7,
        "Fat": 1.2,
        "Carb": 5.5
    },
    {
        "STT": 601,
        "Type": "Gia vị, nước chấm",
        "Name": "Mắm tôm loãng",
        "Unit": "100g",
        "Calo": 44,
        "Protein": 7,
        "Fat": 0.8,
        "Carb": 2.1
    },
    {
        "STT": 602,
        "Type": "Nước giải khát",
        "Name": "Nước dừa tươi",
        "Unit": "100g",
        "Calo": 21,
        "Protein": 0.4,
        "Fat": 0,
        "Carb": 4.8
    },
    {
        "STT": 603,
        "Type": "Nước giải khát",
        "Name": "Nước ép cà chua",
        "Unit": "100g",
        "Calo": 19,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carb": 2.6
    },
    {
        "STT": 604,
        "Type": "Nước giải khát",
        "Name": "Nước quýt tươi",
        "Unit": "100g",
        "Calo": 24,
        "Protein": 0.4,
        "Fat": 0.2,
        "Carb": 5.1
    },
    {
        "STT": 605,
        "Type": "Đồ ngọt",
        "Name": "Mạch nha",
        "Unit": "100g",
        "Calo": 331,
        "Protein": 0.2,
        "Fat": 0,
        "Carb": 82.5
    },
    {
        "STT": 606,
        "Type": "Đồ ngọt",
        "Name": "Kẹo vừng",
        "Unit": "100g",
        "Calo": 417,
        "Protein": 2.8,
        "Fat": 6.9,
        "Carb": 85.9
    },
    {
        "STT": 607,
        "Type": "Đồ ngọt",
        "Name": "Kẹo bơ cứng (Toffee)",
        "Unit": "100g",
        "Calo": 448,
        "Protein": 2.1,
        "Fat": 17.2,
        "Carb": 71.1
    },
    {
        "STT": 608,
        "Type": "Đồ ngọt",
        "Name": "Bột cacao",
        "Unit": "100g",
        "Calo": 414,
        "Protein": 19.6,
        "Fat": 13.7,
        "Carb": 53
    },
    {
        "STT": 609,
        "Type": "Đồ ngọt",
        "Name": "Bánh trứng nhện",
        "Unit": "100g",
        "Calo": 369,
        "Protein": 9.6,
        "Fat": 3.7,
        "Carb": 74.2
    },
    {
        "STT": 610,
        "Type": "Đồ ngọt",
        "Name": "Bánh quế",
        "Unit": "100g",
        "Calo": 435,
        "Protein": 8.3,
        "Fat": 10.7,
        "Carb": 76.4
    },
    {
        "STT": 611,
        "Type": "Đồ ngọt",
        "Name": "Bánh khảo",
        "Unit": "100g",
        "Calo": 376,
        "Protein": 3.2,
        "Fat": 0.3,
        "Carb": 90.2
    },
    {
        "STT": 612,
        "Type": "Đồ ngọt",
        "Name": "Bánh kem xốp",
        "Unit": "100g",
        "Calo": 492,
        "Protein": 8.3,
        "Fat": 24,
        "Carb": 60.7
    },
    {
        "STT": 613,
        "Type": "Đồ ngọt",
        "Name": "Bánh chả",
        "Unit": "100g",
        "Calo": 395,
        "Protein": 3.4,
        "Fat": 6.6,
        "Carb": 80.5
    },
    {
        "STT": 614,
        "Type": "Đồ ngọt",
        "Name": "Bánh bích quy",
        "Unit": "100g",
        "Calo": 376,
        "Protein": 8.8,
        "Fat": 4.5,
        "Carb": 75.1
    },
    {
        "STT": 615,
        "Type": "Thịt",
        "Name": "Thịt vịt hầm",
        "Unit": "100g",
        "Calo": 224,
        "Protein": 19.6,
        "Fat": 16.2,
        "Carb": 0
    },
    {
        "STT": 616,
        "Type": "Đồ ngọt",
        "Name": "Mứt bí ngô",
        "Unit": "100g",
        "Calo": 198,
        "Protein": 0.5,
        "Fat": 0,
        "Carb": 49.1
    },
    {
        "STT": 617,
        "Type": "Sữa",
        "Name": "Sữa dê tươi",
        "Unit": "100g",
        "Calo": 69,
        "Protein": 3.5,
        "Fat": 4.1,
        "Carb": 4.5
    },
    {
        "STT": 618,
        "Type": "Sữa",
        "Name": "Pho mát",
        "Unit": "100g",
        "Calo": 380,
        "Protein": 25.5,
        "Fat": 30.9,
        "Carb": 0
    },
    {
        "STT": 619,
        "Type": "Thủy hải sản",
        "Name": "Ruốc cá quả",
        "Unit": "100g",
        "Calo": 312,
        "Protein": 65.7,
        "Fat": 4.1,
        "Carb": 3
    },
    {
        "STT": 620,
        "Type": "Thủy hải sản",
        "Name": "Ruốc tôm",
        "Unit": "100g",
        "Calo": 305,
        "Protein": 65.5,
        "Fat": 3.1,
        "Carb": 3.7
    },
    {
        "STT": 621,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu cám gạo",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 622,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu cọ",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 623,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu dừa",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 624,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu đậu tương",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 625,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu mè",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 626,
        "Type": "Dầu, mỡ, bơ",
        "Name": "Dầu oliu",
        "Unit": "100g",
        "Calo": 900,
        "Protein": 0,
        "Fat": 100,
        "Carb": 0
    },
    {
        "STT": 627,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Váng đậu (tàu hũ ky/phù chúc)",
        "Unit": "100g",
        "Calo": 414,
        "Protein": 50.2,
        "Fat": 20.8,
        "Carb": 6.5
    },
    {
        "STT": 628,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Hạt bí",
        "Unit": "100g",
        "Calo": 519,
        "Protein": 35.1,
        "Fat": 31.8,
        "Carb": 23
    },
    {
        "STT": 629,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Bột đậu xanh",
        "Unit": "100g",
        "Calo": 347,
        "Protein": 24.6,
        "Fat": 2.5,
        "Carb": 56.5
    },
    {
        "STT": 630,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Hạt mít",
        "Unit": "100g",
        "Calo": 166,
        "Protein": 0.7,
        "Fat": 1.1,
        "Carb": 38.3
    },
    {
        "STT": 631,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Hạt dẻ",
        "Unit": "100g",
        "Calo": 363,
        "Protein": 6.8,
        "Fat": 1.8,
        "Carb": 79.8
    },
    {
        "STT": 632,
        "Type": "Đồ ngọt",
        "Name": "Khoai dẻo",
        "Unit": "1 viên",
        "Calo": 13,
        "Protein": 0,
        "Fat": 0,
        "Carb": 3.3
    },
    {
        "STT": 633,
        "Type": "Hạt giàu đạm và chất béo",
        "Name": "Granola",
        "Unit": "20g",
        "Calo": 104,
        "Protein": 2,
        "Fat": 4,
        "Carb": 13
    }
];
export default function () {
    const [data, setData] = useState(DATA);
    
    useEffect(() => {
        setData(DATA);
    }, [DATA]);
    return data;
}