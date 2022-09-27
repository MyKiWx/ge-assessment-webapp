import NavItem from "../interface/NavItem";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'ความเครียด',
        children: [
            {
                label: 'การเรียน/การทำงาน  ✏️',
                subLabel: 'การเรียน การงาน การบ้านบ่เฮ็ด',
                href: '/stress/aboutstudy',
            },
            {
                label: 'การเงิน  💵',
                subLabel: 'การเงินมีปัญหา ใส่ชุดเล่นไปเรียนได้บ่มื้ออื่น',
                href: '/stress/aboutmoney',
            },
            {
                label: 'การใช้ชีวิต 🎁',
                subLabel: 'อยากมีเธอมาใช้ชีวิตด้วยกัน',
                href: '/stress/aboutlife',
            },
            {
                label: 'ครอบครัว 🪄',
                subLabel: 'สักวันผมจะทำให้พ่อแม่ ไม่ลำบาก',
                href: '/stress/aboutfamily',
            },
            {
                label: 'ความรัก 🫶',
                subLabel: 'มีความสุขหลายบ่ไปฮักกับบักนั่นน่ะ',
                href: '/stress/aboutlove',
            },
            {
                label: 'สภาพแวดล้อม 🌲',
                subLabel: 'อยู่ไหนก็ไม่สบายใจ ไปอยู่ห้องเธอได้ไหม',
                href: '/stress/aboutenvironment',
            },

        ],
        href: '/stress',
    },
    {
        label: 'แบบทดสอบความเครียด',
        children: [
            {
                label: 'แบบสำรวจข้อมูลทั่วไปและแบบทดสอบความเครียดที่ 1',
                subLabel: 'แบบสำรวจเก็บข้อมูลทั่วไปและแบบทดสอบความเครียดที่ 1 เพื่อประเมินความเครียดของผู้ทดสอบ',
                href: '/teststress/teststress1',
            },
            {
                label: 'แบบทดสอบความเครียดที่ 2',
                subLabel: 'สำหรับผู้ทดสอบที่ผ่านแบบทดสอบที่ 1 แล้วมีคะแนนสูงกว่า 7',
                href: '/teststress/teststress2',
            },
            {
                label: 'แบบทดสอบความเครียดที่ 3',
                subLabel: 'สำหรับผู้ทดสอบที่ผ่านแบบทดสอบที่ 2 แล้วมีคะแนนสูงกว่า 20',
                href: '/teststress/teststress3',
            }
        ],
        href: '/teststress',
    },
    {
        label: 'เกี่ยวกับเรา',
        href: '/aboutus',
    }
];