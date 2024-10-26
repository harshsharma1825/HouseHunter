import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListing,setOfferListing] = useState([]);
  const [saleListing,setSaleListing] = useState([]);
  const [rentListing,setRentListing] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListing);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch('api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListing(data);
        fetchRentListing();
      } catch (error) {
        console.log(error);
      }
    }

    const fetchRentListing = async () => {
      try {
        const res = await fetch('api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListing(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    }
    
    
    const fetchSaleListing = async () => {
      try {
        const res = await fetch('api/listing/get?type=sell&limit=4');
        const data = await res.json();
        setSaleListing(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOfferListing();

  }, [])

  return (
    <div>
      {/* top */}
        <div className='flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto'>
          <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Unlocking Your  {' '}<span className='text-slate-500'>Dream Home </span>
          <br /> With ease
          </h1>
          <div className='text-gray-700 text-xs sm:text-sm'>
          "Welcome to <span className='text-slate-800'>The Realtor</span>, your one-stop destination for buying, selling, and renting properties. Discover a wide range of homes and commercial spaces tailored to your needs. Experience seamless transactions and expert guidance every step of the way.
          </div>
          <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
            Lets get Started now
          </Link>
        </div>
      {/* slider */}
        <Swiper navigation>
        {
          offerListing && offerListing.length > 0 && (
            offerListing.map((listing) => (
              <SwiperSlide>
                <div className='h-[500px]' key={listing._id} style={{background:`url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:"cover"}}>

                </div>
              </SwiperSlide>
            ))
          )
        }
        </Swiper>
      {/* listing result */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {
          offerListing && offerListing.length>0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                  Show More Offer
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  offerListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {
          rentListing && rentListing.length>0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent Places for Rent</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                  Show More Places for Rent
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  rentListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {
          saleListing && saleListing.length>0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers for Sale</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sell'}>
                  Show More Places for Sale
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  saleListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
