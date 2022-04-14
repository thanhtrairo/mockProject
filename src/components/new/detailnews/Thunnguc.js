import { Row } from 'react-bootstrap';
import React from 'react'

import { Collapse} from "reactstrap"

const ThunNguc = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    //     console.log(isOpen);
    return (
        <Row>
            <h3 className='content-text'>
                Tự tin diện áo nhún ngực chuẩn trend 2021
            </h3>
            <p>
                Trước khi đi sâu vào từng cách phối đồ hợp với những bối cảnh nhất định,
                nàng đừng bỏ qua những lưu ý quan trọng khi mặc áo nhún ngực. Đó là thiết
                kế nhún ngực sẽ tự động ăn gian số đo vòng một của người mặc. Vì thế nếu sở hữu vòng
                một ngoại cỡ thì nàng nên cân nhắc bỏ qua mẫu áo này hoặc chọn những chiếc có phần
                nhúnthật đơn giản, tiết chế. Nếu không trông tổng thể nàng sẽ bị mất cân đổi với phần
                trên quá khổ so với phần thân dưới.
            </p>
            <div className="shadow-sm p-3 mb-5 bg-body rounded content-new-detail">

                <ul className='table-of-content'>
                    Nội dung bài viết
                    <span
                        color="primary"
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    > [{isOpen ? "Ẩn" : "Hiện"}]
                    </span>
                    <Collapse isOpen={isOpen}>
                        <li>
                            <a href="#id1">
                                1. Phối áo nhún ngực đi làm
                            </a>
                        </li>
                        <li>
                            <a href="#id2">
                                2. Phối áo nhún ngực đi chơi
                            </a>
                        </li>
                        <li>
                            <a href="#id3">
                                3. Phối áo nhún ngực đi tiệc sự kiện
                            </a>
                        </li>
                    </Collapse>
                    </ul> 

            </div>
            <p>
                Một cách phối đồ cho người lùn khá được ưa chuộng đó chính là kết hợp quần cạp cao
                cùng với các loại áo kiểu. Những chiếc quần cạp cao luôn luôn là item giúp người mặc
                có thể “ăn gian” chiều cao đầy hiệu quả. Khi diện những loại quần này, đôi chân của
                bạn sẽ mang lại cảm giác dài hơn so với thực tế, khiến bạn trông cao hơn hẳn. Những
                loại quần như jean skinny, legging cho đến quần short đều thành công giúp bạn “ăn gian” vài cm đấy!
            </p>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_vang_3_c2e9ec46661648dda31014842de344c2.jpg"  alt='ThunNguc' />
                <p className="content-image">
                    Áo nhún ngực là item giúp người mặc ăn gian số đo vòng một đáng kể.
                </p>
            </div>

            <p>
                Thêm một lưu ý nữa, nàng nên cân nhắc chọn mẫu áo lót phù hợp khi mặc áo nhún ngực. Với một
                số mẫu áo nhún ngực mà nếu không chọn nội y khéo, nó sẽ phản tác dụng và khiến phần ngực
                của nàng không đứng form, gọn gàng mà thậm chí còn bị bẹp dúm rất phản cảm.
            </p>

            <b><i id="id1">Phối áo nhún ngực đi làm</i></b>
            <p>
                Khi chọn đồ công sở, nàng nên mặc những mẫu áo nhún ngực có tay, chiều dài áo không quá ngắn,
                thường những mẫu này sẽ được thiết kế cổ vuông hiện đại, trendy. <br />

                Nàng có thể phối áo cùng với quần tây form baggy vẫn đang là hot trend, hay chân váy mini gọn
                gàng, năng động. Chỉ cần chiều dài váy phù hợp thì nàng hoàn toàn có thể tự tin diện outfit
                này đi làm.
            </p>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_da_1_62fc0ea2f3824103918337e32ef2140f.jpg" alt='ThunNguc'  />
                <p className="content-image">
                    Trendy, nổi bật nơi công sở với bộ trang phục này
                </p>
            </div>

            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_cam_1_5e7a9b56bbd741b3a4cb26a451a753c4.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Phối áo nhún ngực với chân váy mini gọn gàng, xinh xắn cho nàng những ngày đi làm năng động
                </p>
            </div>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_xanh_duong_1_f8a81b2b5f384b56b9f46f617dd739b1.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Ở những môi trường tương đối thoải mái, nàng có thể diện áo dáng croptop phối cùng chân váy mini cơ bản. Với set đồ này nàng có thể vừa đi làm vừa đi chơi
                </p>
            </div>
            <p>
                Chỉ cần lưu ý là để bộ trang phù hợp với môi trường công sở, nàng nên chọn áo dáng không quá ngắn, chất liệu có độ dày thích hợp,
                nếu là voan hay sheer thì nên có lớp lót.
            </p>
            <b><i id="id2">Phối áo nhún ngực dạo phố</i></b>
            <p>
                Với trường hợp này thì thật đơn giản cho nàng, chẳng cần suy nghĩ phức tạp, cầu kỳ, hãy chọn những chiếc quần jeans thoải mái,
                mẫu chân váy năng động hay quần shorts thật trẻ trung. Miễn là màu sắc của các items hài hoà, không đối chọi nhau, nàng sẽ dễ
                dàng có ngay bộ cánh xuống phố cực xinh xắn, trendy.
            </p>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_vang_1_9208629f08df44e4b27adbbb6838e577.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Diện áo cổ vuông nhún ngực với quần shorts ống rộng cực năng động
                </p>
            </div>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_da_1_e56d825a19814ba8a860766660f14731.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Set đồ xuống phố cực ngầu và trẻ trung
                </p>
            </div>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_trang_1_0218006913aa4c0c97b58cb07fb0ad6d.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Phối áo với skort hoạ tiết kẻ ô trẻ trung
                </p>
            </div>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_den_1_da76c18497d44437ac52f48b16a14dae.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Đừng quên phong cách monochrome cho nàng fashionista lẫn nàng lười nha
                </p>
            </div>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_hong_1_1f8e45e71895439fb11f351c6b0b8916.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Lên đồ cực chất và cực năng động, thoải mái chứ không hề cầu kỳ như nhiều người e ngại
                </p>
            </div>
            <p>
                Nàng cứ thoải mái mix 	&amp; match với nhiều hot items khác như quần baggy, quần ống rộng,
                chân váy xoè để có những bộ cánh xuống phố, đi cà phê, hẹn hò cực xinh yêu nhé!
            </p>

            <b><i id="id3">Phối áo nhún ngực đi tiệc, sự kiện</i></b>
            <p>
                Dành cho những dịp đòi hỏi sự phá cách, mới mẻ và đầu tư hơn một chút, nàng vẫn có thể diện
                áo nhún ngực nhưng hãy khéo léo mix thêm phụ kiện ấn tượng. Cũng nên để ý giày và túi xách
                nữa nhé. Những items tưởng nhỏ nhưng lại có võ, có thể nâng tầm phong cách nàng vô cùng hiệu
                quả.
            </p>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_den_1_af4108fabe434b2baab28f3c45e156d5.jpg" alt='ThunNguc' />
                <p className="content-image">
                    Outfit tưởng chừng đơn giản nhưng vô cùng chất, hút mắt và ấn tượng nhờ khéo léo kết hợp giày, phụ kiện, trang sức
                </p>
            </div>
            <p>
                Với những dịp tiệc tùng thì nàng nên chọn những mẫu áo nhún ngực sử dụng chất liệu voan,
                sheer, ren để outfit có độ sang trọng nhất định. Đừng quên đôi boots cực ngầu hoặc giày
                cao gót sang chảnh nữa nhé.
            </p>
        </Row>
    )
}
export default ThunNguc;