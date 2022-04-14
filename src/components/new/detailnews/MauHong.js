import { Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Collapse} from "reactstrap"
import React from 'react'

const MauHong = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    console.log("heloo");
    return (
        <Row>
            <h3 className='content-text'>
                Màu hồng pastel kết hợp với màu gì xinh nhất, thời trang nhất?
            </h3>
            <p>
                Các tông màu pastel từ lâu đã là lựa chọn ưa thích của những cô nàng ngọt ngào.
                Có thể nói đây là tông màu được chuộng nhất trong những năm gần đây. Điều thú
                vị ở pastel là gam màu này có thể biến hóa theo nàng từ phong cách cổ điển đến
                hiện đại, không có bao nhiêu phong cách có thể làm khó được những mảng màu xinh
                xắn này. Không khó để đoán hồng pastel là màu được nhiều cô nàng mê mẩn, vậy giờ
                chúng ta cùng tìm hiểu xem màu hồng pastel kết hợp với màu gì đáng yêu, xinh xắn nhất nhé!
            </p>
            <div className="shadow-sm p-3 mb-5 bg-body rounded content-new-detail">
                <ul className='table-of-content'>
                    Nội dung bài viết
                    <span
                        color="primary"
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >  [{isOpen ? "Ẩn" : "Hiện"}]
                    </span>
                    <Collapse isOpen={isOpen}>
                        <li>
                            <a href='#id1'>
                                1. Hồng pastel có kén người mặc không?
                            </a>
                        </li>
                        <li>
                            <a href='#id2'>
                                2. Phối đồ màu hồng pastel kết hợp với màu trắng
                            </a>
                        </li>
                        <li>
                            <a href="#id3">
                                3. Kết hợp cả set màu hồng
                            </a>
                        </li>
                        <li>
                            <a href='#id4'>
                                4. Cách phối màu hồng với những gam màu pastel khác
                            </a>
                        </li>
                        <li>
                            <a href="#id5">
                                5. Kết hợp với họa tiết kẻ
                            </a>
                        </li>
                        <li>
                            <a href="#id6">
                                6. Phối màu hồng pastel với những gam màu trung tính

                            </a>

                        </li>
                    </Collapse>
                </ul>
            </div>
            {/* <h2>Cách 1: Cách phối đồ hack chiều cao cho nữ với các loại quần cạp cao</h2> */}
            <p id='id1'>
                Hồng pastel có kén người mặc không? <br />
                Nàng đừng quên màu hồng là màu rất đặc trưng với phái nữ chúng ta,
                vậy nên dù là hồng pastel cũng sẽ phù hợp với mọi cô gái, mọi người
                phụ nữ, đừng vì độ tuổi, môi trường, hay phong cách thường ngày cản trở nàng
                chọn gam màu ngọt ngào này nhé. Hồng pastel quá không kén tuổi hay kén dáng
                đâu, nó có thể hơi kén da một chút nên nàng cần lưu ý điểm này. Với các cô
                nàng da ngăm, hạn chế chọn tông hồng pastel, hồng phấn vì gam màu này dẽ khiến
                da nàng xỉn màu, tái nhợt đi trông đấy. Nếu yêu thích màu hồng các nàng hãy chủ
                động chọn những trang phục hồng vỏ đỗ, hồng ngả tím sẽ phù hợp hơn nhé. Với những
                nàng quá mập cũng không nên diện trang phục màu pastel thường xuyên, những màu đậm
                sẽ hợp với các nàng hơn, nếu chuộng gam pastel hãy khéo léo mix &amp; match cùng những
                màu khác để trang phục được hài hòa.
            </p>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/phoi_do_voi_hong_pastel_a2808642238f4a3cb44095c66715fbca_grande.jpeg" alt=' Màu hồng pastel kết hợp với màu gì'/>
                <p className="content-image">
                    Màu hồng pastel kết hợp với màu gì
                </p>
            </div>

            <h3>
                <i id='id2'>Phối đồ màu hồng pastel kết hợp với màu trắng</i>
            </h3>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/hong_ket_hop_voi_trang_7fb977eb00a840f5a5388f13624b0af2_grande.jpeg" alt='Màu hồng' />
                <p className="content-image">
                    Combo cực xinh cho cô nàng trẻ trung, ngọt ngào
                </p>
            </div>
            <p>
                Có thể coi là một sự kết hợp bất bại, hồng pastel phối cùng màu trắng sẽ cho nàng một combo chuẩn không
                cần chỉnh. Sắc trắng tinh giản, thanh lịch kết hợp cùng gam pastel ngọt ngào nhưng không hề yểu điệu hay sến,
                cho nàng một set đồ rất vừa phải, tôn lên vẻ đáng yêu và nữ tính cho người mặc.<br />

                Sự kết hợp này phù hợp với gần như mọi cô nàng, còn môi trường thì sẽ tùy vào item mà nàng chọn. Nếu là đi chơi,
                dạo phố, hãy chọn những thiết kế chất liệu thun gọn gàng, thoáng mát, kiểu dáng cũng năng động như áo ngắn tay,
                quần hoặc váy dạng ngắn, lúc này nàng sẽ có set đồ xuống phố hoàn hảo. Để đi làm thì nàng nhớ chọn những mẫu có
                kiểu dáng đứng form, chất liệu dày dặn cứng cáp hơn để tránh trường hợp set đồ trông quá trẻ con nhé!
            </p>
            <b><i id='id3'>Kết hợp cả set màu hồng</i></b>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/ngoc-trinh-mac-do-hong_ae13aa1e884e4f31bf44b8483e4dea15_grande.jpeg" alt='Màu hồng' />
                <p className="content-image">
                    Phối cả set đồ theo cùng gam màu là lựa chọn quen thuộc của các fashionista
                </p>
            </div>
            <p>
                Đây là một sự chơi màu hoàn hảo và cực kỳ thu hút, khiến các tín đồ thời trang mê mẩn rất nhiều năm qua. Không nhất
                thiết phải là cả set đều cùng một tông hồng pastel, nàng có thể khéo léo phối hợp nhiều items với nhiều gam màu hồng
                khác nhau như hồng cánh sen, hồng neon, hồng vỏ đỗ trên một set đồ. Kết quả thu được chắc chắn sẽ khiến các nàng bất
                ngờ nhưng vô cùng hài lòng.
            </p>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/phoi_do_hong_ff8849b1ef684c479081e162328fb4a4_grande.jpeg" alt='Màu hồng' />
                <p className="content-image">
                    Nhiều gợi ý phối đồ với màu hồng pastel cho nàng lựa chọn
                </p>
            </div>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/p2_08cd6b5090014079858bb0482c20865d_grande.jpg" alt='Màu hồng' />
                <p className="content-image">
                    Set đồ kẹo ngọt và cực đáng yêu mà không hề cầu kỳ, bất kỳ cô nàng nào cũng có thể áp dụng cho những ngày xuống phố nhẹ nhàng
                </p>
            </div>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/phoi_do_mau_hong_4ef39b96420047d280349e068977e334_grande.jpeg" alt='Màu hồng' />
                <p className="content-image">
                    Các quý cô sành điệu có thể chọn những items độc đáo, có phần cách điệu, có điểm nhấn hơn cho cách phối này.
                    Tất nhiên để mix được set đồ hoàn hảo nàng cần một sự tinh tế và có nhiều kiến thức thời trang
                </p>
            </div>
            <p>
                Sự kết hợp này rất đa dạng, từ giản đơn, ngọt ngào đến tinh tế, hấp dẫn, dù nàng theo đuổi phong cách
                nào cũng có thể thử chơi màu theo cách này. Các cô nàng mạnh mẽ, độc lập chọn cả set đồ vest màu hồng
                thì những nàng chuộng style tiểu thư thướt tha diện những bộ váy áo nhẹ nhàng, có độ mềm rũ. Để không
                phải suy nghĩ màu hồng pastel kết hợp với màu gì, nàng cứ diện cả cây hồng với nhiều sắc độ là lập tức
                có set đồ hút mắt, ấn tượng.
            </p>
            <div className="new-image">
                <img src=" https://file.hstatic.net/1000197303/file/hong_pastel_6a96488a508c451f9defb19ce0bb10a4_grande.jpeg" alt='Màu hồng' />
                <p className="content-image">
                    Một sự hòa trộn giữa cổ điển và hiện đại với gam màu pastel mà nàng nào cũng nên tham khảo
                </p>
            </div>

            <h3>
                <i id='id4'>Phối đồ màu hồng pastel kết hợp với màu trắng</i>
            </h3>

            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/hong_pastel_ket_hop_voi_trung_tinh_f949e08a98ad4bc186675818980ab75e_grande.png" alt='Màu hồng' />
                <p className="content-image">
                    Cách mix màu hồng pastel dễ dàng, nàng nào cũng có thể áp dụng
                </p>
            </div>
            <p>
                Với những nàng lười chơi màu hoặc trong những ngày không biết nên mặc gì, cứ thử phối hồng pastel dễ thương với bất kỳ trang phục
                màu trung tính nào trong tủ đồ nhé. Kết quả thu được là những set đồ nhẹ nhàng, dành cho ngày ra phố đơn giản. Cách phối này sẽ
                biến màu hồng pastel từ một gam đặc biệt, đôi khi khó phối trở thành gam màu basic, dễ chịu hơn hẳn.
            </p>
            <div className="new-image">
                <img src="https://product.hstatic.net/1000197303/product/pro_hong_1_a50a18bc808b4bef9f57ef2a7f804ede.jpg" alt='Màu hồng' />
                <p className="content-image">
                    Một set đồ dễ chịu có thể theo nàng ra phố mua sắm hoặc đến văn phòng trong những ngày nhẹ nhàng, không đòi hỏi tính trang trọng
                </p>
            </div>
            <p>
                Những gam trung tính gợi ý cho nàng là đen, xám, denim, olive,... Nếu sợ set đồ bị chìm thì nàng hãy chọn thêm phụ kiện nổi bật
                một chút để tạo điểm nhấn nhé. Cách phối này gợi ý nàng áp dụng cho phong cách thường ngày, nếu nàng muốn thể hiện phong cách
                thời trang mạnh mẽ hơn thì hãy chọn những cách phối bên trên để tăng sức hút và độ nổi bật của outfit.
            </p>
            <div className="new-image">
                <img src="https://file.hstatic.net/1000197303/file/outfit_hong_pastel_121c290ecd44463e8dd42fea97ec287c_grande.png" alt='Màu hồng' />
                <p className="content-image" id='id5'>
                    Hồng pastel có thể khiến outfit sành điệu, cuốn hút hơn
                </p>
            </div>
            <p id='id6'>
                Hồng pastel kết hợp với màu gì phù hợp với nàng nhất, sau bài viết này chắc nàng cũng đã rút ra được những tips riêng cho mình.
                Để phong cách của bản thân đa dạng hơn, nàng cứ mạnh dạn thử thật nhiều cách phối nhé, đừng ngại sự thay đổi hay đừng vì thiếu
                tự tin mà ngăn bản thân thử sức những style mới mẻ, biết đâu những sự đổi mới sẽ giúp nàng khám khá ra điều gì phù hợp nhất với
                mình, sự kết hợp nào khiến mình thấy tự tin, dồi dào năng lượng nhất. Mùa hè là thời điểm vô cùng lý tưởng đối với những tông
                màu ngọt ngào, tươi sáng như pastel, nàng đừng bỏ qua gam hồng pastel dễ thương, xinh xắn cho tủ đồ hè của mình nhé!
            </p>
        </Row>
    )
}
export default withRouter(MauHong);