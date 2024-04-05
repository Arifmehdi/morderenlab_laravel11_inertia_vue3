<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<!-- <template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template> -->

<template>
    <div>
        <Head title="Log in" />
        <div class="limiter">
            <div class="container-login100">
			    <div class="wrap-login100">
                    <!-- <div class="login100-more" style="background-image: url('{{asset("backend/assets/images/bg-01.jpg")}}');">
				</div> -->
                    <div class="login100-more" :style="{ 'background-image': 'url(' + imagePath + ')' }">
                    </div>
                    <div class="login100-form">

                        <div class="container-login100-form-btn mb-4">
                            <div class="dropdown text-uppercase">
                                <button class="btn btn-default dropdown-toggle text-uppercase" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    <i class="fa fa-globe"></i>{{local}}{{ currentLocale }}
							    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <!-- @foreach($languages as $lang)
                                        @if(app()->getLocale()!=$lang['iso']) <a class="dropdown-item"  href="{{route('change_locale',$lang['iso'])}}">{{$lang['iso']}}</a> @endif
                                    @endforeach -->
                                    <div v-for="(lang, index) in languages" :key="index">
                                        <a v-if="currentLocale !== lang.iso" class="dropdown-item" :href="`/change_locale/${lang.iso}`">{{ lang.iso }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span class="login100-form-title p-b-30">
                            <img :src="logoPath" height="100">
						<!-- <img src="{{asset('backend/img/logo.png')}}" height="100"> -->
					    </span>
                        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder ="Enter email"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    placeholder ="Enter password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../../../../public/backend/img/logo.png';
import imagePath from '../../../../public/backend/assets/images/bg-01.jpg'
export default {
  data() {
    return {
      languages: [],
      currentLocale: 'en', // Initialize with your desired locale value
      local: 'en',
      logoPath: logo,
      imagePath : imagePath
    }
  },
  mounted() {
    this.languages = this.$props.languages;
    this.currentLocale = this.$props.currentLocale;
    // You can fetch the locale from wherever you are storing it, like Vuex, localStorage, or any other source
    // For example, if using Vuex:
    // this.locale = this.$store.state.locale;
    // Or if storing in localStorage:
    // this.locale = localStorage.getItem('locale');
    // Replace the above with whatever logic you use to set the locale value
  }
}
</script>
