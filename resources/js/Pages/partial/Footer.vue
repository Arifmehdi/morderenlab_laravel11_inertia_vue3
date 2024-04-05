<template>
    <div>
        <footer class="main-footer text-center">
            <!-- @include('partials.socials') -->

            <!-- @if(isset($info['socials'])&&count($info['socials'])) -->
                <div class="row pt-4">
                    <div class="col-lg-12">
                        <!-- <h6 class="text-center mb-3">- {{__('Follow Us')}} -</h6> -->
                        <h6 class="text-center mb-3">- Follow Us -</h6>
                    </div>
                <div class="col-lg-12">
                    <ul class="social text-center">
                        <!-- @foreach($info['socials'] as $key=>$value) -->
                        <!-- @if(!empty($value)) -->
                            <li class="d-inline">
                            <!-- <a href="{{$value}}"> -->
                            <a href="">
                                <!-- <img src="{{url('img/'.$key.'.png')}}" width="40px"> -->
                            </a>
                            </li>
                        <!-- @endif
                        @endforeach -->
                    </ul>
                </div>
                </div>
                <!-- @endif -->
            <!-- {{--<strong>{{$info['footer']}}</strong>--}} -->
            <strong>Home</strong>
        </footer>

        <aside class="control-sidebar control-sidebar-dark">
             <!-- Control sidebar content goes here -->
        </aside>
    </div>
</template>
