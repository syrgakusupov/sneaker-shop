import React, { useState } from 'react'
import s from './Kross.module.scss'
import checkimg from '../../../img/fo.svg'
import setchekimg from '../../..//img/tr.svg'
import q from '../../../img/likes.svg'
import w from '../../../img/setlikes.svg'
const Kross = ({ item }) => {
    const [check, setchek] = useState(false)
    const [like, setLike] = useState(false)
    function ha() {
        setchek(!check)
    }
    function li() {
        setLike(!like)
    }
    return (
        <div>
            <div className={s.block}>
                <div className={s.kross} key={item.id}>
                    <div className={s.imga}>
                        <img
                            onClick={li}
                            src={like ? w : q} alt="" />
                    </div>
                    <img src={item.image} alt="" />
                    <h4>
                        {item.name}
                    </h4>
                    <p>
                        цена:
                    </p>
                    <div className={s.mani}>
                        <h2>
                            {item.price}
                        </h2>
                        <img
                            onClick={ha}
                            src={check ? setchekimg : checkimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kross